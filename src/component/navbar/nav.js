import './nav.css';
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import { useNavigate } from "react-router-dom";
import mainlogo from '../assets/logomain.jpeg';
import person from '../assets/person.svg'

 function Left_Navbar (){
    const navigate=useNavigate();
    return <>
     <div className="left-nav">
                <span>
                    <img onClick={()=>navigate('/Surveylist')} src={logo1} alt="logo1" />
                </span>
                <span className="icon2">
                    <img onClick={()=>navigate('/Surveypage')} src={logo2} alt="logo2" />
                </span>
                <span className="three-line">
                    <img onClick={()=>navigate('/Questions')} className="three" src={hamburger} alt="hamburger" />
                </span>
            </div>
    </>
}

 function Top_Navbar (prop){
    const navigate=useNavigate();

    return <>
    <div className="top-nav">

    <div className="right">
        <img className='logoimg' width='40px' src={mainlogo} alt="logo"/>
        <div><i> My Surveys </i></div>
       
    </div>
   

    <div className="right">
    <strong style={{'margin-top':'8px','color':'darkblue'}}>{prop.name}</strong>
        <div className="picture-nav">
            
          <img  onClick={()=>navigate('/user')} className="sort-image-person" src={person} alt="Person" />
         </div>
        <div> 
            <button
             className="select"
             onClick={()=>navigate("/logout")}>
            Logout
            </button> 
        </div>
    </div>
   
</div>
    </>
}

export {Left_Navbar , Top_Navbar}