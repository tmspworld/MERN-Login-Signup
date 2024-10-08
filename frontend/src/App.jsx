// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./Components/Login.jsx";
// import Signup from "./Components/Signup.jsx";

// function App() {
//   return (
//     <Login />
//     // <Router>
//     //   <div className="App">
//     //     {/* Add your Navbar or other common components here */}
//     //     <Routes>
//     //       {/* Define your routes */}
//     //       <Route path="/" element={<Navigate to="/login" />} />
//     //       <Route path="/login" element={<Login />} />
//     //       <Route path="/signup" element={<Signup />} />
//     //     </Routes>
//     //   </div>
//     // </Router>
//   );
// }

// export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          {/* Redirect the root path ("/") to "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Define the routes for login and signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
