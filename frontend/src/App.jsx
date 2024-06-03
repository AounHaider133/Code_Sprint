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
import EditAccountForm from "./pages/EditAccountForm";
import AddUserForm from "./pages/AddUserForm";

function App() {
  const { isUserLogin, isAdminLogin } = useAuth();

  console.log("IsUserLogin:" + isUserLogin);
  console.log("IsAdminLogin:" + isAdminLogin);
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
        element={isAdminLogin ? <AdminDashboard /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/typing/edit/:id/:level"
        element={isAdminLogin ? <EditParagraph /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/basic"
        element={isAdminLogin ? <EditBasicQuizForm /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/intermediate"
        element={isAdminLogin ? <EditIntermediateQuizForm /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/quiz/edit/:id/advance"
        element={isAdminLogin ? <EditAdvanceQuizForm /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/add-quiz/basic"
        element={isAdminLogin ? <CreateBasicQuestionForm /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/add-quiz/intermediate"
        element={
          isAdminLogin ? <CreateIntermediateQuizForm /> : <AdminSignin />
        }
      />
      <Route
        path="/admin-dashboard/add-quiz/advance"
        element={isAdminLogin ? <CreateAdvanceQuizForm /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/add-para/:level"
        element={isAdminLogin ? <CreatePara /> : <AdminSignin />}
      />
      <Route
        path="/admin-signin"
        element={isAdminLogin ? <AdminSignin /> : <AdminSignin />}
      />
      <Route
        path="/admin-dashboard/users/edit/:id"
        element={<EditAccountForm />}
      />
      <Route
        path="/admin-dashboard/users/add-user"
        element={isAdminLogin ? <AddUserForm /> : <AdminSignin />}
      />
    </Routes>
  );
}

export default App;
