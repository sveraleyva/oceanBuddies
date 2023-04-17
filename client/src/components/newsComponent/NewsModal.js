import { SlClose } from "react-icons/sl";
import classes from "./News.module.css";

const NewsModal = (props) => {
  const closeIcon = <SlClose size="45px" color="rgb(250 204 21)" />;

  return (
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <button onClick={props.action}>{closeIcon}</button>
          <h1 className="text-center font-bold text-2xl pt-2 pb-4 text-[#0B2447]">{props.title}</h1>
          <p className="py-3 text-lg ml-1">{props.par1}</p>
          <p className="py-3 text-lg ml-1">{props.par2}</p>
          <p className="py-3 text-lg ml-1">{props.par3}</p>
          <p className="py-3 text-lg ml-1">{props.par4}</p>
          <p className="py-3 text-lg ml-1">{props.par5}</p>
          <div className="text-center mt-2">
            <h1 className="font-bold text-[#0B2447]">Date Posted</h1>
            <p className="font-light">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsModal;
