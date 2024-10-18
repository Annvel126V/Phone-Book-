// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import s from "./App.module.css";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { fetchContacts } from "../redux/contacts/operations";
// import { selectError, selectLoading } from "../redux/contacts/slice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import Spiner from "./Spiner/Spiner";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

// function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div className={s.container}>
//       <h1 className={s.title}>
//         Phonebook
//         <FaPhoneVolume className={s.icon} />
//       </h1>
//       <ContactForm />
//       <SearchBox />
//       {isLoading && !error && (
//         <h2>
//           <Spiner />
//         </h2>
//       )}
//       {error && <h2>{error}</h2>}

//       <ContactList />
//     </div>
//   );
// }

// export default App;
