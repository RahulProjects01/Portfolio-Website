import React from 'react';
import './Contect.css';



const Contect = () => {
  return (
    <div className='Contect-page' id='contact'>
      <h1>Let's connect</h1>

      <form action="#Contect-page" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Name' required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter mail' required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder='Write a massage....' required></textarea>

        <button className='su' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contect
