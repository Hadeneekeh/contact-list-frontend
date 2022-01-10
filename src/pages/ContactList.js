import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Table } from 'reusables';
import { contactService } from 'services/contactService';
import { createUseStyles } from 'react-jss';
import NewContact from 'components/NewContact';

const useStyles = createUseStyles({
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20
  },

  error: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    marginBottom: 5
  }
});

const ContactList = () => {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = useState(false);

  const { isFetching, isError, refetch } = useQuery(
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
      {isError && (
        <div className={classes.error}>
          <p>Unable to fetch records.</p>
        </div>
      )}
      <div className={classes.btn}>
        <Button label="Create" handleClick={() => setOpen(true)} />
      </div>
      <Table
        page={1}
        totalPages={1}
        handleNext={null}
        handlePrev={null}
        columns={['First Name', 'Last Name', 'Email', 'Phone']}
        dataSource={tableData}
        loading={isFetching}
      />

      <NewContact
        open={open}
        handleClose={() => {
          setOpen(false);
          refetch();
        }}
      />
    </div>
  );
};

export default ContactList;
