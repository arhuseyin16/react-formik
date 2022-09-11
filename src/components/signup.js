import {useFormik} from "formik";
import Validation from "./validation";
import {useState} from "react";

function Signup () {
    const [isHid, setIsHid] = useState(false)
    const defaultValue = {
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: defaultValue,
        onSubmit: values => {
            console.log(values);
            setIsHid(true);
        },
        validationSchema: Validation
    });

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label style={{display: 'block'}}>Email</label>
                <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                />
                {errors?.email && touched?.email && (<div className="errors">{errors.email}</div>)}
                <br/>
                <br/>
                <label style={{display: 'block'}}>Password</label>
                <input
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                />
                {errors?.password && touched?.password && (<div className="errors">{errors.password}</div>)}
                <br/>
                <br/>
                <label style={{display: 'block'}}>Password Confirm</label>
                <input
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                />
                {errors?.passwordConfirm && touched?.passwordConfirm && (<div className="errors">{errors.passwordConfirm}</div>)}
                <br/>
                <br/>

                <button type="submit">Submit</button>
                <br/>
                <br/>
                {isHid && <code>{JSON.stringify(values)}</code>}
            </form>
        </div>
    )
}

export default Signup;