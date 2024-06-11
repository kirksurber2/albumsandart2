import React from "react";
import styles from './PreLaunch.module.css'

function PreLaunch() {

    const [formData, setFormData] = React.useState( 
        {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        }
    )

    function handleChange(event) {
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:  event.target.value
            }
        })
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        try {

            let res = fetch ("https://ccv0uu7rl5.execute-api.us-east-1.amazonaws.com/Test", {
                method: "POST",
                body: JSON.stringify ({
                    firstName: formData.firstName,
                    email: formData.email,
                    phone: formData.phone,
                }),
            });
    
        const resJson = res.json();
          if (res.status === 200) {
            setFormData( 
                {
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                })

            }else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

        
    

    return (
        <>
            <form onSubmit={handleSubmit} className='preLaunchForm'>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange} 
                    value={formData.firstName} 
                    name="firstName"></input>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    onChange={handleChange} 
                    value={formData.lastName} 
                    name="lastName">

                </input>
                <input 
                    type="phone"
                    placeholder="Phone" 
                    onChange={handleChange} 
                    value={formData.phone} 
                    name="phone">

                 </input>
                <input 
                    type="email"
                    placeholder="Email" 
                    onChange={handleChange} 
                    value={formData.email} 
                    name="email">

                 </input>
                <button>Submit</button>
            </form>
        </>
    )
}

export default PreLaunch