import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
             user: null,
     token: "",
  });

  useEffect(() => {
     if (auth?.token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`; // ✅ Fixed line
     } else {
       delete axios.defaults.headers.common["Authorization"]; // Remove header if logged out
     }
   }, [auth?.token]);

   // 🔹 Load auth data from localStorage on first render
   useEffect(() => {
     const data = localStorage.getItem("auth");
     if (data) {
       const parsedData = JSON.parse(data);
       setAuth({
         
         user: parsedData.user,
         token: parsedData.token,
       });
     }
   }, []); 

   return (
     <AuthContext.Provider value={[auth, setAuth]}>
       {children}
     </AuthContext.Provider>
   );
 };

//custom hook
const useAuth = () => useContext(AuthContext);
 
export { AuthProvider, useAuth };
