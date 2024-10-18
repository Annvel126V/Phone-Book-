import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Spiner from "./Spiner/Spiner";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Spiner />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
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
