import { useNavigate, useParams } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { contactService } from 'services/contactService';
import { Table } from 'reusables';
import ErrorNotification from 'components/ErrorNotification';
import ContactCard from 'components/ContactCard';
import NavigationButtons from 'components/Navigation';
import DeleteContact from 'components/DeleteContact';

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { contactId } = params;

  const [tableData, setTableData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [contact, setContact] = useState({});

  const formatDate = (date) => {
    const day = new Date(date).toLocaleDateString();
    const time = new Date(date).toLocaleTimeString();
    return `${day}, ${time}`;
  };

  const { isFetching, isError, refetch, isSuccess } = useQuery(
    ['get single contact', contactId],
    contactService.getContact,
    {
      onSuccess: ({ data }) => {
        const { firstName, lastName, phone, email, history } = data;
        const dataSource = history.map((el) => [
          el.firstName,
          el.lastName,
          el.email,
          el.phone,
          formatDate(el.updatedAt),
          el.id
        ]);
        setTableData(dataSource);
        setContact({ firstName, lastName, phone, email });
      },
      onError: (err) => {
        console.log(err);
      }
    }
  );

  return (
    <div>
      <h1>Contact Details</h1>
      <ErrorNotification isError={isError} />
      <NavigationButtons
        isReady={isSuccess}
        navigate={navigate}
        onEdit={() => setShowEdit(true)}
        onDelete={() => setShowAlert(true)}
      />

      <ContactCard contact={contact} isReady={isSuccess} />

      <h5>Edit History</h5>

      {isSuccess && tableData.length === 0 ? (
        <p>This contact has not been edited</p>
      ) : (
        <Table
          page={1}
          totalPages={1}
          handleNext={null}
          handlePrev={null}
          columns={['First Name', 'Last Name', 'Email', 'Phone', 'Date']}
          dataSource={tableData}
          loading={isFetching}
        />
      )}

      <ContactForm
        open={showEdit}
        handleClose={() => {
          setShowEdit(false);
          refetch();
        }}
        type="edit"
        contact={contactId}
      />

      <DeleteContact
        open={showAlert}
        handleClose={() => {
          setShowAlert(false);
          refetch();
          navigate('/')
        }}
        contact={contactId}
      />
    </div>
  );
};

export default ContactDetails;
