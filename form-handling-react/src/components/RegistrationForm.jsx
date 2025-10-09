import { useState } from "react";

const RegistrationForm = () => {
const [formData, setFormData] = useState({username: "", email: "", password: ""});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({ username: "", email: "", password: "" });
    setErrors({});
  };

return (
    <form onSubmit={handleSubmit}>
        <label>
            username:
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              onChange={handleChange}
            />
            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </label>

        <label>
            email:
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </label>
        
        <label>
            password:
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </label>
        <button type="submit">Register</button>
    </form>
);
}

export default RegistrationForm;