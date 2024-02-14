import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleRemove = ({ id }) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <button onClick={() => handleRemove(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
