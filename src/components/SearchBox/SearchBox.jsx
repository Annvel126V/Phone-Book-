import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterchange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.search}>
      <label className={s.title}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleFilterchange}
      />
    </div>
  );
};

export default SearchBox;
