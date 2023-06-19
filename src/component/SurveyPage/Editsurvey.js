import "./SurveyPage.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Left_Navbar, Top_Navbar } from "../navbar/nav";



const EditSurvey = (prop) => {
    const navigate = useNavigate();
    const [type, setType] = useState("");
    console.log("prop",prop,prop.id)

const url = 'https://surveyform-nikhilrajput.onrender.com';
    // const url = 'http://localhost:8000';

    const [userdata, setdata] = useState({});
    const [surveydata, setsurveydata] = useState({name:"", description:"", type:"", startDate:"",endDate:"" });
    console.log(userdata)
    const auth = async () => {
        try {
            const res = await fetch(url +'/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                credentials: 'include'
            })
            
            const data = await res.json();
            // setdata({...userdata,name:data.name, phone:data.phone})
            setdata(data)
            console.log(data);

            if (!res.status == 200) {
                alert('Login Again')
            }
        } catch (error) {
            // navigate('/')
        }
    }
    useEffect(() => {
        auth()
    }, [])

    const HandleInput = (e) =>{
        
        const name = e.target.name;
        const value = e.target.value;
        setdata({...surveydata,[name]:value})
    }

    const handleSubmit = async (e) => {
        // if(!name || !description || !startDate || !endDate ||  !type ){
        //     alert('Fill Required fields');
        //     return
        // }
       
        //  console.log(name, description, startDate , endDate , otherCriteria , type , image);
       
        try { 
            alert("sorry unable to edit")
        
            // const res = await axios.patch(url + "/survey/surveys/:name/update", {
               
                // "email" : userdata.email,
                // "name": surveydata.name,
                // "description": surveydata.description,
                // "type":surveydata.type,
                // "startDate": surveydata.startDate,
                // "endDate": surveydata.endDate,
                // "otherCriteria": surveydata.otherCriteria
               
                
            // });
            // console.log(res.data);
            navigate('/Surveylist')
            // alert('Survey Edited Successfully');

        } catch (error) {
            console.error(error);
            alert('ERROR FROM SERVER');
        }
    }


    return (
        <div>
            <div className="main">
                <Left_Navbar />
                <div className="right-side">
                    <Top_Navbar />

                    <div className="box">
                        <div id="text">Edit Survey</div>
                        <button
                        className="btns" id="btn-cancel"
                        onClick={()=>navigate('/Surveylist')}
                        >Cancel</button>
                        
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btns"
                            id="btn-next"
                        >Save</button>
                    </div>
                    <hr></hr>
                    <div id="form">
                        <form id="form" method="POST" action="/" >
                            <div id="left-inside">
                                <label  className="name-title">Name</label>
                                <input
                                    className="name-input"
                                    required
                                    type={'text'}
                                    name="name"
                                    value={prop.id}
                                    placeholder={"Name here"}
                                    // onChange={(e) => { setName(e.target.value) }} />
                                    onChange={HandleInput}
                                 />
                                <label className="description-title" >Description</label>
                                <textarea
                                    className="description-input"
                                    required
                                    type={'text'}
                                    name="description"
                                    value={userdata.description}
                                    placeholder={"Enter text here..."}
                                    onChange={HandleInput}
                                    
                                />
                                <label className="survey-title"> Type of Survey</label>
                                <select
                                    className="options-style"
                                    // onChange={(e) => { setType(e.target.value) }}
                                    // value={}
                                    required
                                    id="options"
                                    name="Type"
                                >
                                    <option value="select">Select</option>
                                    <option value="Community">community</option>
                                    <option value="Online">Online</option>
                                    <option value="Focus Group">Focus Group</option>
                                    <option value="Telephone">Telephone</option>
                                    <option value="Email">Mail</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div id="right-inside">
                                <div className="date">
                                    <label className="date-title">Start Date</label>
                                    <input
                                        className="date-input"
                                        // onChange={HandleInput}
                                        required
                                        type={'date'}
                                    />
                                    <label className="date-title end-date">End Date</label>
                                    <input
                                        className="date-input"
                                        onChange={ HandleInput}
                                        required
                                        type={'date'}
                                    />
                                </div>
                                <label className="criteria-title" >Other Criteria (optional)</label>
                                <input
                                    className="criteria-input"
                                    // onChange={HandleInput}
                                    type={'text'}
                                    placeholder={"Enter here"}
                                />

                                <label className="image-title" >Upload Image (optional)</label>
                                <div className="uploader-input">
                                    <input
                                        type="file"
                                        // onChange={HandleInput}
                                        id="input-file-max-fs"
                                        class="file-upload"
                                        data-max-file-size="2M"
                                    />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default EditSurvey;


