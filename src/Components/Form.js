import React from 'react'

const Form = (props) => {
  return (
    <div class="w-75 backgroundColor">
      <h1 class="text-center">Sign Up</h1>
      <form action="#" class="form p-4" >
          <label for="username" class="form-label m-2">Username</label>
          <input type="text" className="form-control" required/>

          <label for="password" className="form-label m-2">Password</label>
          <input type="password" className="form-control" required/>

          <label for="occupation" className="form-label m-2">Occupation</label>
          <input type="text" className="form-control" required/>

          <label for="country" className="form-label m-2">Country</label>
          <select name="country" id="country" className="form-select" required>
            <option value="" disabled selected hidden>-- Select Your Country --</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Australia">Australia</option>
          </select>

          <input type="submit" className="form-control btn btn-outline-primary mt-5" value="Submit" />
      </form>
    </div>
  )
}

export default Form


