import { loadStripe } from "@stripe/stripe-js";
import { appendToCognitoUserAgent } from "amazon-cognito-identity-js";
import React from "react";
import UserPool from "../UserPool";

function Signup () {

    
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    }
    )

    function handleChange (event) {
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value             
            }
        })
    }

    function handleSubmit  (event)  {
        event.preventDefault()
       
        UserPool.signup(formData,  [], null, (err, data) => {
            if(err) {
                console.error(err);
            }
            console.log(data)
            })
        }

        setFormData( {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: ""
        })
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onClick={handleChange}
                >
                </input>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onClick={handleChange}
                >
                </input>
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onClick={handleChange}
                >
                </input>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onClick={handleChange}
                >
                </input>
               
                <button>Submit</button>
            </form>
        </div>
    )
    }

export default Signup