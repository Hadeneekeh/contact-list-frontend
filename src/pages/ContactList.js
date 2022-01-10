import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Table } from 'reusables';
import { contactService } from 'services/contactService';
import { createUseStyles } from 'react-jss';
import ContactForm from 'components/ContactForm';
import ErrorNotification from 'components/ErrorNotification';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
});

const ContactList = () => {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { isFetching, isError, refetch, isSuccess } = useQuery(
    'get all contact',
    contactService.getAllContacts,
    {
      onSuccess: ({ data }) => {
        const dataSource = data.map((el) => [el.firstName, el.lastName, el.email, el.phone, el.id]);
        setTableData(dataSource);
      },
      onError: (err) => {
        console.log(err);
      }
    }
  );

  return (
    <div>
      <h1>Contact List</h1>
      <ErrorNotification isError={isError} />
      <div className={classes.btn}>
        <Button label="Create" handleClick={() => setOpen(true)} />
      </div>
      {isSuccess && tableData.length === 0 ? (
        <p>No record yet, create one.</p>
      ) : (
        <Table
          page={1}
          totalPages={1}
          handleNext={null}
          handlePrev={null}
          columns={['First Name', 'Last Name', 'Email', 'Phone']}
          dataSource={tableData}
          loading={isFetching}
          tableType="list"
          onRowClick={(rowId) => navigate(`contact/${rowId}`)}
        />
      )}

      <ContactForm
        open={open}
        handleClose={() => {
          setOpen(false);
          refetch();
        }}
        type="create"
      />
    </div>
  );
};

export default ContactList;
