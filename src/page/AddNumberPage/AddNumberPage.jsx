import { useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactcForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactList from '../../components/ContactList/ContactList';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getUser } from 'redux/auth/auth-selectors';

import styles from './add-number-page.module.css';

const AddNumberPage = () => {
  const contacts = useSelector(getFilteredContacts);
  const isContacts = Boolean(contacts.length);

  return (
    <div className={styles.contactBox}>
      <div className={styles.block}>
        <h3>Pnonebook</h3>
        <ContactForm />
      </div>
      <div className={styles.block}>
        <h3>Contacts</h3>
        <div className={styles.listBox}>
          <ContactFilter />
          {isContacts && <ContactList />}
          {!isContacts && 'You dont have a contacts'}
        </div>
      </div>
    </div>
  );
};

export default AddNumberPage;
