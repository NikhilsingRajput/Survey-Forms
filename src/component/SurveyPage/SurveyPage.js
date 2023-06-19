import "./SurveyPage.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Left_Navbar, Top_Navbar } from "../navbar/nav";



const SurveyPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [otherCriteria, setotherCriteria] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [data, setdata] = useState("")
    const url = 'https://surveyform-nikhilrajput.onrender.com';
    // const url = 'http://localhost:8000';

    const auth = async () => {
        try {
            const res = await fetch( url+'/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                credentials: 'include'
            })
            
            const data = await res.json();
            setdata(data)
            // console.log(data);

            if (!res.status == 200) {
                alert('Login Again')
            }
        } catch (error) {
            console.log('error',error)
            // navigate('/')
        }
    }
    useEffect(() => {
        auth()
    }, [])


    const handleSubmit = async (e) => {
        if(!name || !description || !startDate || !endDate ||  !type ){
            alert('Fill Required fields');
            return
        }
       
       
        //  console.log(name, description, startDate , endDate , otherCriteria , type , image);
        try {
        
            const res = await axios.post(url + "/survey/create", {
                "email": data.email,
                "name": name,
                "description": description,
                "startDate": startDate,
                "endDate": endDate,
                "otherCriteria": otherCriteria,
                "type": type,
                "image": image
            });
            console.log(res.data);
            navigate('/Questions')
            alert('survey added');

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
                        <div id="text">Create Survey</div>
                        <button className="btns" id="btn-cancel">Cancel</button>
                        
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btns"
                            id="btn-next"
                        >Next</button>
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
                                    placeholder={"Name here"}
                                    onChange={(e) => { setName(e.target.value) }} />
                                <label className="description-title" >Description</label>
                                <textarea
                                    className="description-input"
                                    required
                                    type={'text'}
                                    placeholder={"Enter text here..."}
                                    onChange={(e) => setDescription(e.target.value)}
                                    
                                />
                                <label className="survey-title"> Type of Survey</label>
                                <select
                                    className="options-style"
                                    onChange={(e) => { setType(e.target.value) }}
                                    // value={}
                                    required
                                    id="options"
                                    name="options"
                                >
                                    <option value="select">Select</option>
                                    <option value="community">community</option>
                                    <option value="Online">Online</option>
                                    <option value="Focus Group">Focus Group</option>
                                    <option value="Telephone">Telephone</option>
                                    <option value="Mail">Mail</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div id="right-inside">
                                <div className="date">
                                    <label className="date-title">Start Date</label>
                                    <input
                                        className="date-input"
                                        onChange={(e) => { setStartDate(e.target.value) }}
                                        required
                                        type={'date'}
                                    />
                                    <label className="date-title end-date">End Date</label>
                                    <input
                                        className="date-input"
                                        onChange={(e) => { setEndDate(e.target.value) }}
                                        required
                                        type={'date'}
                                    />
                                </div>
                                <label className="criteria-title" >Other Criteria (optional)</label>
                                <input
                                    className="criteria-input"
                                    onChange={(e) => { setotherCriteria(e.target.value) }}
                                    type={'text'}
                                    placeholder={"Enter here"}
                                />

                                <label className="image-title" >Upload Image (optional)</label>
                                <div className="uploader-input">
                                    <input
                                        type="file"
                                        onChange={(e) => { setImage(e.target.value) }}
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

export default SurveyPage;


