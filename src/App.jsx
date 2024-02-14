import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  selectVisibleContacts,
} from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleAddContact = ({ id, name, number }) => {
    dispatch(addContact({ id, name, number }));
  };

  const handleRemoveContact = ({ id }) => {
    dispatch(deleteContact({ id }));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onClick={handleAddContact} />
      <h1>Contacts</h1>
      <Filter />
      <ContactList contacts={visibleContacts} onClick={handleRemoveContact} />
    </div>
  );
};

export default App;
