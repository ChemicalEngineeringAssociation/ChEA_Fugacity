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
    username: "",
    email: "",
    contact: "",
    college: "",
    password: "",
    repeatPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e, name) => {
    const { value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.contact) {
      errors.contact = "Contact number is required!";
    }
    if (!values.college) {
      errors.college = "College name is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Passwords do not match!";
    }
    return errors;
  };

  return (
    <form className="max-w-md p-5 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <Level title="Name" for="username" />
        <div className="flex">
          <Input
            type="text"
            id="username"
            placeholder="Bonnie Green"
            onChange={handleChange}
            value={formValues.username}
            name="username"
          />
        </div>
        {formErrors.username && (
          <p className="text-red-500">{formErrors.username}</p>
        )}
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
            type="text"
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
      <div className="mb-5">
        <Level title="Password" for="password" />
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formValues.password}
          name="password"
        />
        {formErrors.password && (
          <p className="text-red-500">{formErrors.password}</p>
        )}
      </div>
      <div className="mb-5">
        <Level title="Confirm Password" for="repeatPassword" />
        <Input
          type="password"
          id="repeatPassword"
          placeholder="Repeat your password"
          onChange={handleChange}
          value={formValues.repeatPassword}
          name="repeatPassword"
        />
        {formErrors.repeatPassword && (
          <p className="text-red-500">{formErrors.repeatPassword}</p>
        )}
      </div>
      <button
        type="submit"
        className=" rounded-[4px] bg-[#20CD8D] text-lightPrimary py-2 font-bold text-xl   hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-300  w-full sm:w-auto px-5  text-center"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
