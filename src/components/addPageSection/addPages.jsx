import { useState } from "react";

export default function AddPages() {
const [addPages, setAddPages] = useState('')
    
function handleAddPage(e) {
    setAddPages(e.target.value)
}

    return(
        <div>
            <div>
                <select onClick={handleAddPage}>
                    <option value="">Add Pages</option>
                    <option value="2">2</option>
                    <option value="2">4</option>
                    <option value="2">6</option>
                    <option value="2">8</option>
                    <option value="2">10</option>
                    <option value="2">12</option>
                    <option value="2">14</option>
                    <option value="2">16</option>
                    <option value="2">18</option>
                    <option value="2">20</option>
                </select>
            </div>
            <div>
                <h5>Total Pages: {}</h5>
                <h5>Est. Images {}</h5>
            </div>
        </div>
)
}
