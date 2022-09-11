import './App.css';
import {Field, Form, Formik, useFormik} from "formik";
import {useState} from "react";
import Signup from "./components/signup";

function App() {
    const [isHidden, setIsHidden] = useState(false);
    const defaultValue = {
        firstName: 'Hüseyin',
        lastName: 'Ar',
        email: 'arhuseyin16@gmail.com',
        gender: 'male',
        hobbies: [],
        country: "tr"
    }
    //önemli olan burada  ınput'un name kısmı yukarıdaki defaultValue değişkenleri ile aynı olmalı
    // angularda formControlName gibi
    // submit için bir function acıp handleSubmit yolluyoruz,
    // input değişken kaydı içinde input'un onChange methodunda handleChange methodunu cagiriyoruz.
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: defaultValue,
        onSubmit: values => {
            console.log(values);
            setIsHidden(true);
        },
    });
  return (
    <div className="App">
              <form onSubmit={handleSubmit}>
                  <label htmlFor="firstName">First Name</label>
                  <input name="firstName" value={values.firstName} onChange={handleChange} />
                  <br/>
                  <br/>
                  <label htmlFor="lastName">Last Name</label>
                  <input name="lastName" value={values.lastName} onChange={handleChange} />
                  <br/>
                  <br/>
                  <label htmlFor="email">Email</label>
                  <input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          type="email"
                  />
                  <br/>
                  <br/>
                  <span>male</span>
                  <input type="radio" name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange} />
                  <span>female</span>
                  <input type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange} />
                  <br/>
                  <br/>
                  <div>
                      <input type="checkbox" name="hobbies" value="football" onChange={handleChange} />
                      Football
                  </div>
                  <div>
                      <input type="checkbox" name="hobbies" value="cinema" onChange={handleChange} />
                      Cinema
                  </div>
                  <div>
                      <input type="checkbox" name="hobbies" value="other" onChange={handleChange} />
                      Other
                  </div>
                  <br/>
                  <br/>
                  <div>
                      <select name="country" value="tr" onChange={handleChange}>
                          <option value="tr">Turkey</option>
                          <option value="fr">France</option>
                          <option value="ge">Germany</option>
                      </select>
                  </div>
                  <br/>
                  <br/>
                  <button type="submit">Submit</button>
                  <br/>
                  <br/>
                  {isHidden && <code>{JSON.stringify(values)}</code>}
              </form>
        <p>------------------------------------------------------------------------------------</p>
        <br/>
        <br/>
        <h1>SIGNUP</h1>
        <br/>
        <br/>
        <Signup/>
    </div>
  );
}

export default App;
