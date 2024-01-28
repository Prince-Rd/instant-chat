import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/login";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";


function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
