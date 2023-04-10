import "./SurveyPage.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg'
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const SurveyPage = () => {
    const navigate=useNavigate()
        const [name, setName] = useState('');
        const [description, setDescription] = useState("");
        const [startDate, setStartDate] = useState();
        const [endDate, setEndDate] = useState();
        const [otherCriteria, setotherCriteria] = useState("");
        const [type, setType] = useState("");
        const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        navigate('/Questions')
        
      //  console.log(name, description, startDate , endDate , otherCriteria , type , image);
      try {
        //instead of local host we need to use hosted backend later*************
        const res = await axios.post("https://surveyform-nikhilrajput.onrender.com/survey/create", {
            "name": name,
            "description": description,
            "startDate": startDate,
            "endDate": endDate,
            "otherCriteria": otherCriteria,
            "type": type,
            "image" : image
        });
        console.log(res.data);
        alert('survey added');
      
    } catch (error) {
        console.error(error);
    }
    }


    return (
        <div>
            <div className="main">
                <div className="left-nav">
                    <span>
                        <img src={logo1} alt="logo1" />
                    </span>
                    <span className="icon2">
                        <img src={logo2} alt="logo2" />
                    </span>
                    <span className="three-line">
                        <img className="three" src={hamburger} alt="hamburger" />
                    </span>
                </div>
                <div className="right-side">
                    <div className="top-nav">
                        <span>Logo</span>
                        <span className="right">
                            <span>
                                <select className="select">
                                    <option >Logout</option>
                                </select> </span>
                        </span>
                        <div className="picture-nav">
                            <img className="sort-image-person" src={person} alt="Person" />
                        </div>
                    </div>
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
                        <form method="POST" action="/" id="form">
                            <div id="left-inside">
                                <label className="name-title">Name</label>
                                <input
                                    className="name-input"
                                    required
                                    type={'text'}
                                    placeholder={"Name here"}
                                    onChange={(e) => { setName(e.target.value) }} />
                                <label className="description-title" >Description</label>
                                <input
                                    className="description-input"
                                    required type={'text'}
                                    placeholder={"Description"}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <label className="survey-title"> Type of Survey</label>
                                <select
                                    className="options-style"
                                    onChange={(e) => {setType(e.target.value)}}
                                    // value={}
                                    required
                                    id="options"
                                    name="options"
                                >
                                    <option  value="select">Select</option>
                                    <option  value="type1">TYPE1</option>
                                    <option  value="type2">TYPE2</option>
                                </select>
                            </div>

                            <div id="right-inside">
                                <div className="date">
                                    <label className="date-title">Start Date</label>
                                    <input
                                        className="date-input"
                                        onChange={(e) => {setStartDate(e.target.value)}}
                                        required
                                        type={'date'}
                                    />
                                    <label className="date-title end-date">End Date</label>
                                    <input
                                        className="date-input"
                                        onChange={(e) => {setEndDate(e.target.value)}}
                                        required
                                        type={'date'}
                                    />
                                </div>
                                <label className="criteria-title" >Other Criteria</label>
                                <input
                                    className="criteria-input"
                                    onChange={(e) => { setotherCriteria(e.target.value) }}
                                    type={'text'}
                                    placeholder={"Enter here"}
                                />

                                <label className="image-title" >Upload Image</label>
                                <div className="uploader-input">
                                    <input
                                        type="file"
                                        onChange={(e) => {setImage(e.target.value)}}
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


