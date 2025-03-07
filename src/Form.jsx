import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Form = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent successfully!✅");
    
  
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1000);

    
    e.target.submit();
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gradient-to-r from-gray-800 to-black rounded-xl shadow-md mt-48">
      <h2 className="text-xl text-white font-semibold mb-4">Let's Connect</h2>
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4 text-white" 
        action="https://formsubmit.co/rv931563@gmail.com" 
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-5"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-4 min-h-50"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-black text-white p-2 rounded border border-gray-300 hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
});

export default Form;
