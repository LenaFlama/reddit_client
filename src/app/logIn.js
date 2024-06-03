import React from "react";

const LogIn = () => {

  


  return (
    <form>
      <div class='mb-3'>
        <label for='email' class='form-label'>
          Email address
        </label>
        <input
          type='email'
          class='form-control'
          id='email'
          aria-describedby='emailHelp'
        ></input>
        <div id='emailHelp' class='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class='mb-3'>
        <label for='password' class='form-label'>
          Password
        </label>
        <input
          type='password'
          class='form-control'
          id='password'
        ></input>
      </div>
      <div class='mb-3 form-check'>
        <input
          type='checkbox'
          class='form-check-input'
          id='autoSave'
        ></input>
        <label class='form-check-label' for='autoSave'>
          Save your data
        </label>
      </div>
      <button type='submit' class='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default LogIn;
