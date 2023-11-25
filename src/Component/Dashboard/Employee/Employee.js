import { Container } from "@mui/system";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./employee.css";

const Employee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [number, setNumber] = useState("");

  // console.log(firstName);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, jobPosition, number };

    const token = localStorage.getItem("t_id").split('"')[1];

    fetch("https://go-travel-server-tau.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New Join Successfully");
      });
  };

  return (
    <div>
      <Toaster />
      <div className="banner-img"></div>

      <div className="-mt-[135px] md:-mt-[133px] xl:-mt-24 ml-3 lg:ml-[160px] xl:ml-[300px]">
        <h4 className="uppercase">IT'S TIME TO</h4>
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-blue-50">
          Go-Travel
        </h1>
      </div>

      <Container maxWidth="lg" className="mt-12">
        <h1 className="text-3xl font-medium">Add New Employee</h1>
      </Container>

      <Container maxWidth="lg mt-6 mb-12">
        <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
          <div className="w-full">
            <input
              type="name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100 w-1/2"
            />
            <input
              type="name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100 w-1/2"
            />
          </div>
          <div className="mt-6">
            <select
              type="name"
              placeholder="Job Position"
              onChange={(e) => setJobPosition(e.target.value)}
              className="p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100 w-full"
            >
              <option value="Admin">Admin</option>
              <option value="editor">editor</option>
              <option value="subadmin">subadmin</option>
            </select>
          </div>
          <div className="w-full mt-6">
            <input
              type="email"
              placeholder="Enter Work Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100 w-1/2"
            />
            <input
              type="number"
              placeholder="Enter Phone Number"
              onChange={(e) => setNumber(e.target.value)}
              className="p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100 w-1/2"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 mt-6 text-xl font-semibold bg-smooth-yellow-100 hover:bg-white hover:border hover:border-smooth-yellow-100"
          >
            save
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Employee;
