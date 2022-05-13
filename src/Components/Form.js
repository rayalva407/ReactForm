import React, { useState } from 'react'

const Form = (props) => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    occupation: "",
    country: ""
  })
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: formData.username,
      password: formData.password,
      occupation: formData.occupation,
      country: formData.country
    }

    setPending(true);

    fetch('http://localhost:8080/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    .then(() => setPending(false))
    setSubmitted(true);

  }

  return (
    <div className="w-75 bg-secondary p-3 bg-opacity-25 text-white rounded-3">
      <h1 className="text-center">Sign Up</h1>
      <form action="#" className="form p-4" onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label m-2">Username</label>
          <input type="text" name="username" className="form-control" onChange={(e) => setFormData({...formData, username: e.target.value})} required/>

          <label htmlFor="password" className="form-label m-2">Password</label>
          <input type="password" name="password" className="form-control" onChange={(e) => setFormData({...formData, password: e.target.value})} required/>

          <label htmlFor="occupation" className="form-label m-2">Occupation</label>
          <input type="text" name="occupation" className="form-control" onChange={(e) => setFormData({...formData, occupation: e.target.value})} required/>

          <label htmlFor="country" className="form-label m-2">Country</label>
          <select name="country" id="country" className="form-select" onChange={(e) => setFormData({...formData, country: e.target.value})} required>
            <option value="" disabled selected hidden>-- Select Your Country --</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Australia">Australia</option>
          </select>

          {!pending && <input type="submit" className="form-control btn btn-outline-primary mt-5" value="Submit" />}
          {pending && <input type="submit" className="form-control btn btn-outline-primary mt-5" value="Submitting..." />}
      </form>
      { submitted && <p className="text-center">Thank you for signing up {formData.occupation} {formData.username} from {formData.country}!</p> }
    </div>
  )
}

export default Form


