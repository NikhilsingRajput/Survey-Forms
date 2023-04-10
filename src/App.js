
import Sign_in from './component/signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/Register';
import Surveylist from './component/surveylist';
import SurveyPage from './component/SurveyPage/SurveyPage';
import QuestionPage from './component/createQuestion/createQuestion';
import Preview from './component/createQuestion/preview';


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
        </Routes>
      </Router>


    </div>
  );
}

export default App;
