import Navbar from "../../components/navbars/Navbar";
import './editingPage.css'

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Estates from '../../assets/images/Estates.jpg'
import Meridian from '../../assets/images/Meridian.jpg'

export default function EditingPage() {

    return (
        <main>
            <Navbar/>
            <div>
                <h6 style={{backgroundColor: '#3c3c3c', color: 'white', marginTop: '10px', marginBottom: '10px'}}>Want Something Unique?  See our <strong><u>Lux Signature Edit</u></strong></h6>
                <h2>Album Editing & Design</h2>
            </div>
            <div className="editPackages">        
                <div className="editPackage">
                    <h2>Album Design</h2>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>30 Page Album Design</p>
                    </div>  
                     
                    <div className="selectArea">
                        <h6> ***Included with Album Purchase ***</h6>
                    </div>
                </div>           
                <div className="editPackage" id="premium">
                    <h2>Premium</h2>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Album Design</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>3 revisions</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Color Correction</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Skin Smoothing</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Contrast Enhancement</p>
                    </div>  
                    <div className="selectArea">
                        <button>Add to Cart  <b>$299</b></button>
                    </div>
                </div>           
                          
                <div className="editPackage" id="lux">
                    <h2>Lux</h2>
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Album Design</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>4 revisions</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Color Correction</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Skin Smoothing</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Contrast Enhancement</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Beauty Edits</p>
                    </div>  
                    <div className="selectArea">
                        <button>Add to Cart  <b>$799</b></button>
                    </div>
                </div>           
                <div className="editPackage">
                    <h2>Lux Signature</h2>
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Album Design</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>4 revisions</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Color Correction</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Skin Smoothing</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Contrast Enhancement</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Beauty Edits</p>
                    </div>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>1 Lux Signature Edit</p>
                    </div>  
                    <div className="selectArea">
                        <button>Add to Cart  <b>$999</b></button>
                    </div>
                </div>
                          
            </div>
            <div className="customQuote">
                <h3>Want a custom quote?</h3>
                <button>Call</button>
                <button>Email</button>
            </div> 
            <div style={{marginTop: '50px'}}>
                <h2>Print / Photo Editing</h2>
            </div>
            <div className="editPackages">        
                <div className="editPackage">
                    <h2>Photo Editing</h2>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Color Correction</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Contrast Enhancement</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Creative Toning</p>
                    </div>    
                    
                    <div className="selectArea">
                        <select style={{marginLeft: '15px',marginRight: '5px', padding: '3px'}}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='more'>Over 10</option>
                           
                        </select>
                        <label>Images to Edit</label>
                        <button>Add to Cart  <b>$9 / Image</b></button>
                    </div>   
                </div>           
                <div className="editPackage">
                    <h2>Beauty Editing</h2>  
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Skin Smoothing</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Blemish Removal</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Minor Distraction Removal</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Minor Stray Hair Clean-Up</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Bags under eyes</p>
                    </div>    
                    <div className="feature">
                        <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                        <p>Teeth Whitening</p>
                    </div> 
                    <div className="selectArea">
                        <select style={{marginLeft: '15px',marginRight: '5px', padding: '3px'}}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='more'>Over 10</option>
                           
                        </select>
                        <label>Images to Edit</label>
                        <button>Add to Cart  <b>$19 / Image</b></button>
                    </div>   
                </div>                     
                <div className="editPackage" >
                    <h2>Lux Signature</h2>
                    <div id="luxSignature">

                        <div className="feature" 
                            
                            >
                            <IoCheckmarkCircleOutline size={15} color="green" className="featureIcon"/>
                            <p>Truly Unique</p>
                        </div> 
                    </div>
                    <div className="selectArea">
                        <select style={{marginLeft: '15px',marginRight: '5px', padding: '3px'}}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='more'>Over 10</option>
                           
                        </select>
                        <label>Images to Edit</label>
                        <button>Add to Cart  <b>$299 / Image</b></button>
                    </div>  
                </div>           
            </div>
           
                       
        </main>
    )
}