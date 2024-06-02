// App.jsx
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import TypingMaster from "./pages/TypingMaster";
import Quiz from "./pages/Quiz";
import AdminDashboard from "./pages/AdminDashboard";
import EditParagraph from "./pages/EditParagraph";
import CreatePara from "./pages/CreatePara";
import CreateBasicQuestionForm from "./pages/CreateBasicQuestionForm";
import EditBasicQuizForm from "./pages/EditBasicQuizForm";
import EditIntermediateQuizForm from "./pages/EditIntermediateQuizForm";
import EditAdvanceQuizForm from "./pages/EditAdvanceQuizForm";
import CreateIntermediateQuizForm from "./pages/CreateIntermediateQuizForm";
import CreateAdvanceQuizForm from "./pages/CreateAdvanceQuizForm";
import AdminSignin from "./pages/AdminSignin";

function App() {
  const { isUserLogin } = useAuth();

  console.log("IsUserLogin:" + isUserLogin);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={isUserLogin ? <Dashboard /> : <Signin />}
      />
      <Route path="/about-us" element={<About />} />
      <Route
        path="/typing-master/:id"
        element={isUserLogin ? <TypingMaster /> : <Signin />}
      />
      <Route path="/quiz/:id" element={isUserLogin ? <Quiz /> : <Signin />} />
      <Route
        path="/admin-dashboard"
        element={isUserLogin ? <AdminDashboard /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/typing/edit/:id/:level"
        element={isUserLogin ? <EditParagraph /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/basic"
        element={isUserLogin ? <EditBasicQuizForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/intermediate"
        element={isUserLogin ? <EditIntermediateQuizForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/advance"
        element={isUserLogin ? <EditAdvanceQuizForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/add-quiz/basic"
        element={isUserLogin ? <CreateBasicQuestionForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/add-quiz/intermediate"
        element={isUserLogin ? <CreateIntermediateQuizForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/add-quiz/advance"
        element={isUserLogin ? <CreateAdvanceQuizForm /> : <Signin />}
      />
      <Route
        path="/admin-dashboard/add-para/:level"
        element={isUserLogin ? <CreatePara /> : <Signin />}
      />
      <Route path="/admin-signin" element={<AdminSignin />} />
    </Routes>
  );
}

export default App;
