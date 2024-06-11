

import { useState } from "react"

export default function EditingSection() {
const pro1 = ["Album design", "2 revisions", "color correction", "skin smoothing", "contrast enhancement"]
const pro2 = ["Album design", "3 revisions", "color corrections", "skin smoothing", ]
const lux1 = ["Album design", "4 revisions", "color corrections", "skin smoothing", "blemish removal", "eye bag softening under eyes", "teeth whitening" ]
const lux2 = ["Album design", "4 revisions", "color corrections", "skin smoothing", "blemish removal", "eye bag softening under eyes", "teeth whitening", "1 Signature Edit" ]

const [editSelect, setEditSelect] = useState("")

function handleSelect(e) {
    setEditSelect(e.target.value)
}

    return (
        <div>
            <h4>Editing Options</h4>
            <div>
                <select onChange={handleSelect} >
                    <option value="select">Select Additional Editing</option>
                    <option value="Pro">Pro +199</option>
                    <option value="Pro Plus">Pro Plus + $299</option>
                    <option value="Lux">Lux +599</option>
                    <option value="Black label">Black Label +799</option>
                </select>
                <div className="optionList">
                    
                    {editSelect === "Pro"? pro1.map((edit) => {
                        return(

                            <div>
                            <li>{edit}</li>
                            </div>    
                            )
                           
                    }) 
                    :null
                    
                    }
                    {editSelect === "Pro Plus"? pro2.map((edit) => {
                        return(

                            <div>
                            <li>{edit}</li>
                            </div>    
                            )
                           
                    }) 
                    :null
                    
                    }
                    {editSelect === "Lux"? lux1.map((edit) => {
                        return(

                            <div>
                            <li>{edit}</li>
                            </div>    
                            )
                           
                    }) 
                    :null
                    
                    }
                    {editSelect === "Black label"? lux2.map((edit) => {
                        return(

                            <div>
                            <li>{edit}</li>
                            </div>    
                            )
                           
                    }) 
                    :null
                    
                    }
                </div>
            </div>
        </div>
    )
}