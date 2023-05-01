import { Routes, Route} from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import Navbar from './Navbar/Navbar';
const AddNumberPage = lazy(()=> import('page/AddNumberPage/AddNumberPage'));
const NotFoundPage = lazy(()=> import('page/NotFoundPage/NotFoundPage'));
const RegisterPage = lazy(()=> import('page/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('page/LoginPage/LoginPage'));

export const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route element={<PrivateRoute />}>
              <Route path='contacts' element={<AddNumberPage />} />
            </Route>
            <Route element={<PublicRoute/>}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  );
};
