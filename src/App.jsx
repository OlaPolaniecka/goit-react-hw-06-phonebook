import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from './redux/contactsSlice';

const App = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
