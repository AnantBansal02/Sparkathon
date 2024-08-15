import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';
import SupplierApplication from './Components/SupplierApplication';
import DashBoard from './Pages/DashBoard';

function App() {
  const { authUser } = useAuthContext();
  const path = window.location.pathname;
  path.toLowerCase();
  return (
    <>
      <div
        className="flex items-center justify-center"
      >
        <Routes>
          <Route
            path='/'
            element={authUser ? <Navigate to="/dashboard" /> : <SupplierApplication />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/dashboard"
            element={authUser ? <DashBoard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
