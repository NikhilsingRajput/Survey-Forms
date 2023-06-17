
import Sign_in from './component/Login/signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/Signup/Register';
import Surveylist from './component/SurveyPage/surveylist';
import SurveyPage from './component/SurveyPage/SurveyPage';
import QuestionPage from './component/createQuestion/createQuestion';
import Preview from './component/createQuestion/preview';
import Profile from './component/Profile';
import Errorpage from './component/error';
import EditSurvey from './component/SurveyPage/Editsurvey';
import Logout from './component/Logout';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Sign_in />} />
          <Route path={"/Register"} element={<Register />} />
          <Route path={"/Surveylist"} element={<Surveylist />} />
          <Route path={"/Surveypage"} element={<SurveyPage />} />
          <Route path={"/Questions"} element={<QuestionPage />} />
          <Route path={"/Preview"} element={<Preview />} />
          <Route path={"/user"} element={<Profile />} />
          <Route path={"/Surveypage/edit"} element={<EditSurvey />} />
          <Route path={"*"} element={<Errorpage />} />
          <Route path={"/logout"} element={<Logout />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
