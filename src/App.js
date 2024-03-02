import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(e) {
  //   console.log("Printing First Name")
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }
  // function changeLastNameHandler(e) {
  //   console.log("Printing last name")
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName' />

        <br></br>
        <input
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          name='lastName' />
      </form>
    </div>
  );
}

export default App;
