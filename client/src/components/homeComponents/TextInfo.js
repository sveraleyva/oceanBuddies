import { Link } from "react-router-dom";

const TextInfo = (props) => {
  return (
    <div className="w-3/5 p-5 py-4 relative max-xl:text-center">
      <h1 className="font-bold text-5xl text-[#0B2447] mx-2 max-ex:order-1 max-sm:text-4xl">{props.title}</h1>
      <p className="m-8 font-light mx-5 max-ex:order-2 max-xl:mx-2">{props.text}</p>
      <Link to={props.link}>
        <button className="bg-[#0B2447] text-white p-4 absolute bottom-4 left-36 font-bold max-xl:relative max-xl:left-0 max-xl:bottom-0" onClick={props.action}>
          {props.buttonText}
        </button>
      </Link>
    </div>
  );
};

export default TextInfo;
