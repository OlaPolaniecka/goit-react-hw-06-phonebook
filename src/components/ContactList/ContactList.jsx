import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = contact => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <button className="btn" onClick={() => handleRemoveContact(contact)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
