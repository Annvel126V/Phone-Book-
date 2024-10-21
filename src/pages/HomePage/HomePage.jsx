import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome to this phonebook, please register or login.
      </h1>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.iIfIODSQjrtwsNYFikjqYAHaHa&pid=Api&P=0&h=180"
        width={600}
      />
    </div>
  );
};

export default HomePage;
