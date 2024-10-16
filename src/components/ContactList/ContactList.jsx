import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContact.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
