import { useState, useEffect } from "react";
import "./Register.css";

export const Level = (props) => {
  return (
    <label
      htmlFor={props.for}
      className="block mb-2 text-lg font-medium text-[#20CD8D]"
    >
      {props.title}
    </label>
  );
};

export const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className=" rounded-[4px]  bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-[16px] p-2.5"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e, props.name)}
      value={props.value}
    />
  );
};

function Form() {
  const initialValues = {
    name: "",
    email: "",
    contact: "",
    college: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e, name) => {
    const { value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.BACKEND_URL);
    setFormErrors(validate(formValues));

    // Check if there are any validation errors before submitting the form
    if (Object.keys(formErrors).length !== 0) {
      // Construct the request body
      const requestBody = {
        name: formValues.name,
        email: formValues.email,
        contact: formValues.contact,
        college: formValues.college,
      };

      // Perform the POST request
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            // Registration successful, handle success
            console.log("User registered successfully");
            setServerMessage("User registered successfully");
            setFormValues(initialValues);
            // Do something here like redirecting or showing a success message
          } else {
            // Registration failed, handle error
            return response.json(); // Parse response body as JSON
          }
        })
        .then((data) => {
          // Check if the error message is "Missing fields" or "User already exists"
          if (
            data &&
            (data.message === "Missing fields" ||
              data.message === "User already exists")
          ) {
            // Handle missing fields or user already exists error
            console.error("Registration failed:", data.message);
            setServerMessage(data.message);
            // Do something here like displaying an error message to the user
          }
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          setServerMessage("Registration failed");
          // Handle network errors or other unexpected errors
        });
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name || values.name.length < 3) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.contact || values.contact.length < 10) {
      errors.contact = "Contact number is required!";
    }
    if (!values.college || values.college.length < 3) {
      errors.college = "College name is required!";
    }
    return errors;
  };

  return (
    <form className="max-w-md p-5 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <Level title="Name" for="name" />
        <div className="flex">
          <Input
            type="text"
            id="name"
            placeholder="Bonnie Green"
            onChange={handleChange}
            value={formValues.name}
            name="name"
          />
        </div>
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
      </div>
      <div className="mb-5">
        <Level title="Email" for="email" />
        <div className="relative">
          <Input
            type="email"
            id="email"
            placeholder="name@flowbite.com"
            onChange={handleChange}
            value={formValues.email}
            name="email"
          />
        </div>
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
      </div>
      <div className="mb-5">
        <Level title="Contact" for="contact" />
        <div className="relative">
          <Input
            type="number"
            id="contact"
            placeholder="Enter your contact number"
            onChange={handleChange}
            value={formValues.contact}
            name="contact"
          />
        </div>
        {formErrors.contact && (
          <p className="text-red-500">{formErrors.contact}</p>
        )}
      </div>
      <div className="mb-5">
        <Level title="College" for="college" />
        <div className="flex">
          <Input
            type="text"
            id="college"
            placeholder="Enter your college name"
            onChange={handleChange}
            value={formValues.college}
            name="college"
          />
        </div>
        {formErrors.college && (
          <p className="text-red-500">{formErrors.college}</p>
        )}
      </div>
      {serverMessage && (
        <p className="text-red-500 my-2 text-center">{serverMessage}</p>
      )}
      <button
        type="submit"
        className=" rounded-[4px] bg-[#20CD8D] text-lightPrimary py-2 font-bold text-xl  hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-300  w-full px-5  text-center"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
