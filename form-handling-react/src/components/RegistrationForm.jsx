import { useState } from "react";

const RegistrationForm = () => {
const [formData, setFormData] = useState({username: "", email: "", password: ""});

const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData) => ({formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    if(!formData.username || !formData.email || !formData.password){
        alert("All fields are required");
        
        return;
    }
    console.log("Form submitted", formData);

    return (
    <form onSubmit={handleSubmit}>
        <h2>Registration form</h2>

        <label>
            username:
            <input type="text" 
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleChange}/>

        </label>

        <label>
            email:
            <input type="email" 
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}/>
        </label>
        
        <label>
            <input type="password" 
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}/>
        </label>
        <button type="submit">Register</button>
    </form>
);
}
export default RegistrationForm;