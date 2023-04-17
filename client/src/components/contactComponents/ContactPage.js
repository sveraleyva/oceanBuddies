import { React, useState, useReducer, useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "addName":
      return { ...state, name: action.payload };
    case "addEmail":
      return { ...state, email: action.payload };
    case "addMessage":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const ContactPage = () => {
  const [nameStyling, setNameStyling] = useState("rounded-lg py-2 w-full");
  const [emailStyling, setEmailStyling] = useState("rounded-lg py-2 w-full");
  const [messageStyling, setMessageStyling] = useState(
    "rounded-lg py-2 w-full"
  );
  const [formState, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    if (formState.name === "") {
      setNameStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setNameStyling("rounded-lg py-2 w-full");
    }
    if (formState.email === "") {
      setEmailStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setEmailStyling("rounded-lg py-2 w-full");
    }
    if (formState.message === "") {
      setMessageStyling("rounded-lg py-2 w-full border border-red-500");
    } else {
      setMessageStyling("rounded-lg py-2 w-full");
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-image mb-6  pt-5 pb-10">
      <div className="flex flex-wrap justify-center pt-10 pb-24">
        <div className="w-5/12 max-lg:w-9/12 max-sm:w-full mx-7 pt-8 mt-20  glass">
          <h1 className="text-center text-4xl font-bold text-[#0B2447]">
            Contact Us
          </h1>
          <section className="flex justify-center pt-4"></section>
          <form ref={formRef} onSubmit={formHandler}>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold">Name</label>
              <input
                type="text"
                name="user_name"
                value={formState.name}
                onChange={(event) =>
                  dispatch({ type: "addName", payload: event.target.value })
                }
                className={nameStyling}
              />
            </div>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="user_email"
                value={formState.email}
                onChange={(event) =>
                  dispatch({ type: "addEmail", payload: event.target.value })
                }
                className={emailStyling}
              />
            </div>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={(event) =>
                  dispatch({ type: "addMessage", payload: event.target.value })
                }
                className={messageStyling}
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-[#0B2447] text-white py-2 px-8 rounded-full hover:bg-white hover:text-[#0B2447] border-2 border-[#0B2447] transition duration-300 ease-in-out">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
