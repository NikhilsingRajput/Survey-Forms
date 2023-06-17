import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Logout(){
    const url ='https://surveyform-nikhilrajput.onrender.com';
    // let url = 'http://localhost:8000';
const navigate = useNavigate()
    useEffect(async()=>{
       await axios.get(url+'/logout')
        .then((res)=>{
            
        })
        .catch((err)=>{
            throw err
        })
        navigate('/')
        window.location.reload(true)
    },[])
    

    return<>
    </>
}