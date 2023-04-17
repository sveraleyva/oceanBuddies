import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Signup from "./Signup";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="background-image-two mb-6">
      {/* <img className="relative" style={{ height: "800px", width: "100%" }} src={dolphinsOne} /> */}
      {/* <div className="pt-32 pb-5 bg-blue-700 text-center" /> */}

      <main className="flex flex-wrap justify-center pt-10 pb-24">
        <div className=" w-5/12 max-lg:w-9/12 max-sm:w-full mx-7 pt-8 mt-20 glass">
          <h4 className="text-center text-4xl font-bold text-[#0B2447]">Login</h4>
          <div>
            {data ? (
              <p className="text-center text-white font-bold py-2">
                Success! You may now head <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleFormSubmit}>
                <div className="m-8 py-4">
                  <label className="font-bold ">Email</label>
                  <input className="rounded-lg py-2 w-full" placeholder=" Your email" name="email" type="email" value={formState.email} onChange={handleChange} />
                </div>
                <div className="m-8 py-4">
                  <label className="font-bold ">Password</label>
                  <input className="rounded-lg py-2 w-full" placeholder=" ******" name="password" type="password" value={formState.password} onChange={handleChange} />
                </div>
                <div className="flex justify-center pt-16 pb-8">
                  <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md" style={{ cursor: "pointer" }} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            )}

            {error && <div className="p-3 text-white text-center font-bold text-lg">{error.message}</div>}
          </div>
        </div>
        <Signup />
      </main>
    </div>
  );
};

export default Login;
