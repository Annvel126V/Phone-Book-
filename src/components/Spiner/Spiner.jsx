import { TailSpin } from "react-loader-spinner";
import s from "./Spiner.module.css";

const Spiner = () => {
  return (
    <div className={s.spiner}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4b0082"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spiner;
