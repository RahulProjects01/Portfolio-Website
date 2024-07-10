import React from 'react';
import './Contect.css';

const Contect = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dc9dfe8b-b452-4375-b532-1871c8a0166f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='Contect-page' id='contact'>
      <h1>Let's connect</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Name' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter mail' required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder='Write a message....' required></textarea>
        <button className='su' type="submit">Submit</button>
      </form>
            <span>{result}</span>
    </div>
  )
}

export default Contect
