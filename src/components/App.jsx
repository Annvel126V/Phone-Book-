import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import HomePage from "../pages/HomePage/HomePage";

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
  return isRefreshing ? null : (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
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
