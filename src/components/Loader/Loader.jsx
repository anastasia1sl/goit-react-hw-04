import css from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin
        visible={true}
        height="60"
        width="60"
        color="#171767"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
