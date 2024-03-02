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

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });
  console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(e) { 
    e.preventDefault();
    console.log("Printing form data");
    console.log(formData)
  }
  

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName} />

        <br></br>
        <input
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName} />
        <br>
        </br>
        <input
          type='email'
          placeholder="Email"
          onChange={changeHandler}
          name='email'
          value={formData.email} />

        <br></br>

        <textarea
          placeholder='enter your comments'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br></br>

        <input
          type='checkbox'
          onChange={changeHandler}
          // name='isVisible'
          checked={formData.isVisible}
        //here i am using thevalue of checked instead
        />
        <label htmlFor='isVisible'>Are you visible ?</label>
        <br></br>

        <fieldset>
          <legend>Mode:</legend>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="online"
            id="online"
            checked={formData.mode === "online"}
          />
          <label>Online mode</label>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="offline"
            id="offline"
            checked={formData.mode === "offline"}

          />
          <label>Offline mode</label>
        </fieldset>

        <select
          name="favCar"
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value='scarpio'>Scarpio</option>
          <option value='scarpio'>Fortuner</option>
          <option value='scarpio'>Benz</option>
          <option value='scarpio'>Audi</option>

        </select>
        <label htmlFor='favCar'>Tell me your favourite car</label>
        {/* <input type="submit" name="" value="submit" id="" /> */}
        <button>Submit</button>
      </form>
    </div >
  );
}

export default App;
