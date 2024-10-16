import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.data}>
      <ul>
        <li className={s.info}>
          <div>
            <FaUser />
          </div>
          {name}
        </li>
        <li className={s.info}>
          <div>
            <BsFillTelephoneFill />
          </div>
          {number}
        </li>
      </ul>
      <button className={s.btn} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
