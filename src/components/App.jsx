import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import AuthLayout from './AuthLayout/AuthLayout';
import Navbar from './Navbar/Navbar';
const AddNumberPage = lazy(()=> import('page/AddNumberPage/AddNumberPage'));
const NotFoundPage = lazy(()=> import('page/NotFoundPage/NotFoundPage'));
const RegisterPage = lazy(()=> import('page/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('page/LoginPage/LoginPage'));



export const App = () => {
  return (
    <AuthLayout>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/register" element={<Navbar />}>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<AddNumberPage />} />
            </Route>
            <Route element={<PublicRoute/>}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthLayout>
  );
};

// import Phonebook from "./Phonebook/Phonebook";

// export const App = () => {
//   return (
//     <>
//     <Phonebook/>
//     </>
//   );
// };

// class Phonebook extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'))
//     if (contacts?.length) {
//       this.setState({contacts})
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const {contacts} = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts))
//     }

//   }

//   removeBook = id => {
//     this.setState(({ contacts }) => {
//       const newContact = contacts.filter(contact => contact.id !== id);
//       return { contacts: newContact };
//     });
//   };

//   addContact = ({ name, number }) => {
//     if (this.isDublicate(name, number)) {
//       alert(`${name}: ${number} is already ixist`);
//       return false;
//     }

//     this.setState(prevState => {
//       const { contacts } = prevState;

//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };

//       return { contacts: [newContact, ...contacts] };
//     });
//     return true;
//   };

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   isDublicate(name, number) {
//     const { contacts } = this.state;
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();
//     const result = contacts.find(({ name, number }) => {
//       return (
//         name.toLowerCase() === normalizedName ||
//         number.toLowerCase() === normalizedNumber
//       );
//     });
//     return Boolean(result);
//   }

//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     if (!filter) {
//       return contacts;
//     }

//     const normalizedFilter = filter.toLowerCase();
//     console.log(normalizedFilter);
//     const result = contacts.filter(({ name, number }) => {
//       return (
//         name.toLowerCase().includes(normalizedFilter) ||
//         number.toLowerCase().includes(normalizedFilter)
//       );
//     });
//     return result;
//   };

//   render() {
//     const { addContact, handleFilter, removeBook } = this;
//     const items = this.filterContacts();
//     const isContacts = Boolean(items.length);

//     return (
//       <div className={styles.contactBox}>
//         <div className={styles.block}>
//           <h3>Pnonebook</h3>
//           <ContactForm onSubmit={addContact} />
//         </div>
//         <div className={styles.block}>
//           <h3>Contacts</h3>
//           <div className={styles.listBox}>
//             <ContactFilter handleChange={handleFilter} />
//             {isContacts &&
//             <ContactList >
//               <ContactItem items={items} removeBook={removeBook}/>
//            </ContactList>
//             }
//             {!isContacts && 'You dont have a contacts'}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
