import React from "react";
import { useEffect, useState } from "react"
import sort from '../assets/sort.svg';
import filter from '../assets/sortfilter.svg'
import "./SurveyList.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import  { Left_Navbar, Top_Navbar } from "../navbar/nav";

axios.defaults.withCredentials = true
function SurveyList() {
    const [search , setsearch] = useState("");
    const [data, setdata] = useState({});
    const [edit , setedit] = useState(false)
    
    const navigate=useNavigate();
    const url ='https://surveyform-nikhilrajput.onrender.com';
    // let url = 'http://localhost:8000'
    // auth
    const auth = async () => {
        try {
            const res = await fetch('/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                // credentials: 'include'
            })
            
            const data = await res.json();
            setdata(data)
            // console.log(data);

            if (!res.status == 200) {
                alert('Login Again')
            }
        } catch (error) {
            navigate('/')
        }
    }
   
    // function get
    const getSurveyList = async () => {
       console.log("myuser",data);
        // return await axios.post(url+'/survey/surveys',{'email':data.email})
        //     .then(res => {
        //         if(res.status === 200 && res.data){
        //             // console.log("ok")
        //             return res.data
        //         }
        //         throw new Error('Not able to fetch Data')
        //     })

        const res = await fetch("/survey/surveys",{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email:data.email
            })
        })
        .then(res=>{
            return res.json()
        })
      .catch((err)=>{
            console.log(err)
         })
        console.log(res)
        return res

    }
    useEffect(() => {
        auth()
    },[])

    function Surveys(){
       
        const deletesurvey = async(id,e,sname)=>{
            e.preventDefault()
            const res =await axios.delete(url+'/survey/surveys/:name/delete', {
                data:{"id" : id}
            }).then((res)=>{
                console.log("Survey deleted");
                alert(`${sname} Deleted Successfully`);
                window.location.reload(true);     //to refresh page 
            })
          
        }
        const [survey,setsurvey] = useState([])

        const searchItem=survey.filter((item)=>{
            if(search === ""){
                return item
            }else if (item.name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
        })
    
        useEffect(()=>{
            getSurveyList()
            .then(data =>{
                setsurvey(data)
            }).catch(err=>{
                alert(err.message)
            })
        },[data])
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
                        <td>
                        <button onClick={(e)=>{
                            navigate('/Surveypage/edit')
                        }
                        
                        
                        // console.log(list.name , list._id)
                       
                    
                    }
                         className="btn-edit">Edit</button>
                         <button onClick={(e)=>{
                            deletesurvey(list._id,e,list.name)}
                            }>Delete</button> 
                         </td>
                    </tr>
                </table>
                })
            }
    
        </div>
    }




    return <>
        <div className="main">
           <Left_Navbar />
            <div className="right-side">
                <Top_Navbar name={data.name} />
                
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

export default SurveyList