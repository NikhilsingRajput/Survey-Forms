import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Question() {

    const [number, setNumber] = useState();
    const [question, setQuestion] = useState();
    const [option1, setOPtion1] = useState();
    const [option2, setOPtion2] = useState();
    const [option3, setOPtion3] = useState();
    const [num, setNum] = useState(0);
    const add = async (e) => {


        setNum(num + 1);
        //  console.log(name, description, startDate , endDate , otherCriteria , type , image);
        try {
            //instead of local host we need to use hosted backend later*************
            const res = await axios.post("https://surveyform-nikhilrajput.onrender.com/survey/question/create", {
                "question": question,
                "number":num,
                "options1": option1,
                "options2": option2,
                "options3": option3
            });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    const navigate=useNavigate()
    const save=()=>{
        navigate("/AllQuestion")
    }

    return <div>
        <button onClick={add}>
            Add Question</button>
        <div>
            Q {num}<span>question</span>
            <div>

            </div>
            <input placeholder="Enter Question" style={{ border: "1px solid black" }} onChange={(e) => { setQuestion(e.target.value) }} />
            <div>
                <input type={"radio"} onChange={(e) => { setOPtion1(e.target.value) }} /><label>value</label>
            </div>
            <div>
                <input type={"radio"} onChange={(e) => { setOPtion2(e.target.value) }} /><label>value</label>
            </div>
            <div>
                <input type={"radio"} onChange={(e) => { setOPtion3(e.target.value) }} /><label>value</label>
            </div>
        </div>
        <button onClick={save}>save</button>
    </div>
}