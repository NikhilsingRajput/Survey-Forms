import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Left_Navbar, Top_Navbar } from "./navbar/nav";

export default function Profile() {
    const navigate = useNavigate();
    const [userdata, setdata] = useState("");
    // let url = 'http://localhost:8000'
    let url = 'https://surveyform-nikhilrajput.onrender.com'
    const about = async () => {
        try {
            const res = await fetch(url+'/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(data=>{
                return data.json()
            }).then(data=>{
                console.log(data)
                console.log("udata",data);
                setdata(data)
            }).catch((err)=>{
                console.log(err)
            })
            // console.log('checkdata')
            // const data = await res.json();
            // setdata(data)
            // console.log(data);

            // if (!res.status == 200) {
            //     alert('Login Again')
            // }
        } catch (error) {
            // console.log(error ,"error");
            // navigate('/')
        }

        // return  axios.get(url+'/user',{
        //     // withCredentials: true
        // }).then(res => {
        //         if(res.status === 200 && res.data){
        //             // console.log("ok")
        //             return res.data
        //         }
        //         throw new Error('Not able to fetch Data')
        //     })
    }
    useEffect(() => {
        about()
    }, [])
    
    return <>

        <div className="main">
            <Left_Navbar />
            <div className="right-side">
                <Top_Navbar />
                <div className="container2">
                    <h1> <i>User Profile Information</i> </h1>
                    <h3 className="info-name-spacing">Name : {userdata.name}</h3>
                    <h3>Email : {userdata.email}</h3>
                    <h3>Phone : {userdata.phone}</h3>
                    <h3>Profession : {userdata.profession}</h3>
                </div>
            </div>
        </div>


    </>
}