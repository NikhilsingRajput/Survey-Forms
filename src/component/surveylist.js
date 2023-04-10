import React from "react";
import { useEffect, useState } from "react"
import logo1 from './assets/logo.svg';
import logo2 from './assets/community.svg';
import hamburger from './assets/hamburger.svg';
import sort from './assets/sort.svg';
import filter from './assets/sortfilter.svg'
import person from './assets/person.svg'
import "./SurveyList.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Navigation() {
    const [search , setsearch] = useState("")
    const navigate=useNavigate();
    const url ='https://survey-form-backend-nikhilsingrajput.onrender.com'
    // function get
    function getSurveyList() {
       
        return  axios.get(url+'/survey/surveys')
            .then(res => {
                if(res.status === 200 && res.data){
                    // console.log("ok")
                    return res.data
                }
                throw new Error('Not able to fetch posts')
            })
    }

    function Surveys(){
       
        const [survey,setsurvey] = useState([])

        const searchItem=survey.filter((item)=>{
            if(search === ""){
                return item
            }else if (item.name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
        })
    // console.log(getUserPosts())
        useEffect(()=>{
            getSurveyList()
            .then(data =>{
                setsurvey(data)
            }).catch(err=>{
                alert(err.message)
            })
        },[])
        return <div id="survey-container">
            {
                searchItem.map(list=>{
                    return <table>
                    <tr>
                        <td className="first-tdd">{list.name}</td>
                        <td className="description-table2">{list.description}</td>
                        <td className="third-td">{list.type}</td>
                        <td className="forth-td">{list.startDate} </td>
                        <td className="fifth-td">{list.endDate}</td>
                        <td><button className="btn-edit">Edit</button><button>Delete</button> </td>
                    </tr>
                </table>
                })
            }
    
        </div>
    }




    return <>
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
                {/* ----------------------------------------------- */}
                <div class="navbar">
                    <div class="logo">
                        <span>Survey List</span>
                    </div>
                    <div className="search-container">
                        <input className="search" type="text"
                        onChange={(e)=>{
                            setsearch(e.target.value)
                        }}
                        placeholder="Search" />
                        <button onClick={()=>navigate('/Surveypage')}>Create</button>
                        <img className="sort-image" src={sort} alt="sort" />
                        <img className="sort-image" src={filter} alt="sort" />

                    </div>
                </div>

                <div className="title">
                    <span>Name</span>
                    <span className="description-table">Description</span>
                    <span>Type</span>
                    <span>Start Date</span>
                    <span>End Date</span>
                    <span>Action</span>
                </div>

                    {Surveys()}
            
            </div>
        </div>
    </>
}

export default Navigation