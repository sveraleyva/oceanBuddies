import "./SupportPage.css";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "addFirstName":
      return { ...state, firstName: action.payload };
    case "addLastName":
      return { ...state, lastName: action.payload };
    case "addEmail":
      return { ...state, email: action.payload };
    case "addStreetAddress":
      return { ...state, streetAddress: action.payload };
    case "addFirstNameStyling":
      return { ...state, firstNameStyling: action.payload };
    case "addLastNameStyling":
      return { ...state, lastNameStyling: action.payload };
    case "addEmailStyling":
      return { ...state, emailStyling: action.payload };
    case "addAddressStyling":
      return { ...state, addressStyling: action.payload };
    default:
      return state;
  }
};

const SupportPage = () => {
  const [formState, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    firstNameStyling: "rounded-lg py-2 w-full",
    lastNameStyling: "rounded-lg py-2 w-full",
    emailStyling: "rounded-lg py-2 w-full",
    addressStyling: "rounded-lg py-2 w-full",
    $25Styling: "bg-blue-400 text-white font-bold p-3 text-xl mx-2 my-1",
    $50Styling: "bg-blue-400 text-white font-bold p-3 text-xl mx-2 my-1",
    $75Styling: "bg-blue-400 text-white font-bold p-3 text-xl mx-2 my-1",
    inputStyling: "bg-blue-400 text-white font-bold p-3 text-xl mx-2 my-1",
  });

  const formHandler = () => {
    if (formState.firstName.length === 0) {
      dispatch({ type: "addFirstNameStyling", payload: "rounded-lg py-2 w-full border border-red-500" });
    } else {
      dispatch({ type: "addFirstNameStyling", payload: "rounded-lg py-2 w-full" });
    }
    if (formState.lastName.length === 0) {
      dispatch({ type: "addLastNameStyling", payload: "rounded-lg py-2 w-full border border-red-500" });
    } else {
      dispatch({ type: "addLastNameStyling", payload: "rounded-lg py-2 w-full" });
    }
    if (formState.email.length === 0) {
      dispatch({ type: "addEmailStyling", payload: "rounded-lg py-2 w-full border border-red-500" });
    } else {
    }
    if (formState.streetAddress.length === 0) {
      dispatch({ type: "addAddressStyling", payload: "rounded-lg py-2 w-full border border-red-500" });
    } else {
      //
      dispatch({ type: "addAddressStyling", payload: "rounded-lg py-2 w-full" });
    }
  };

  return (
    <div className="background-image mb-6">
      <div className="flex flex-wrap justify-center pt-16 pb-24">
        <div className="w-5/12 max-lg:w-9/12 max-sm:w-11/12 mx-7 pt-8 mt-20  glass">
          <h1 className="text-center text-4xl font-bold text-[#0B2447]">Donation</h1>
          {/* <section className="flex flex-col items-center pt-4">
            <h2 className="font-bold text-[#0B2447] p-2">Choose an Amount!</h2>
            <div className="flex flex-wrap justify-center">
              <button className={formState.$25Styling}>$25</button>
              <button className={formState.$50Styling}>$50</button>
              <button className={formState.$75Styling}>$75</button>
              <button className={formState.inputStyling}>$125</button>
            </div>
          </section> */}
          <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
            <label className="font-bold">First Name</label>
            <input type="text" name="firstName" value={formState.firstName} onChange={(event) => dispatch({ type: "addFirstName", payload: event.target.value })} className={formState.firstNameStyling} />
          </div>
          <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
            <label className="font-bold">Last Name</label>
            <input type="text" name="lastName" value={formState.lastName} onChange={(event) => dispatch({ type: "addLastName", payload: event.target.value })} className={formState.lastNameStyling} />
          </div>
          <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
            <label className="font-bold">Email</label>
            <input type="text" name="email" value={formState.email} onChange={(event) => dispatch({ type: "addEmail", payload: event.target.value })} className={formState.emailStyling} />
          </div>
          <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
            <label className="font-bold">Street Address</label>
            <input type="text" name="streetAddress" value={formState.streetAddress} onChange={(event) => dispatch({ type: "addStreetAddress", payload: event.target.value })} className={formState.addressStyling} />
          </div>
          <div className="flex justify-center pt-16 pb-8 max-sm:m-3 max-sm:py-1">
            <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md" onClick={formHandler}>
              Donate!
            </button>
          </div>
        </div>
        {/* Volunteer Form */}
        <div className="w-5/12 max-lg:w-9/12 max-sm:w-11/12 mt-20 mx-7 py-8 glass">
          <h1 className="text-center text-4xl font-bold text-[#0B2447]">Volunteer</h1>
          <p className="m-10 py-8 text-center text-[#0B2447] font-bold text-lg max-sm:m-3 max-sm:py-1">
            Volunteering for ocean preservation is an essential step towards protecting our planet's marine life and maintaining a healthy ecosystem. By dedicating our time and energy to ocean conservation efforts, we can contribute to cleaning up the ocean and preventing further pollution. Volunteering opportunities can involve participating in beach cleanups, monitoring marine wildlife, and raising awareness about the importance of ocean preservation. As a volunteer, we can learn about the
            challenges that our oceans face and actively work towards creating a more sustainable future. Every effort, no matter how small, can make a difference in protecting our oceans and the creatures that call them home.
          </p>
          <div className="flex justify-center pt-8">
            <a href="https://www.goeco.org/tags/volunteer-for-marine-conservation/" target="_blank">
              <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md">Volunteer!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
