import { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.js";

export default function Privateroutes() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        
        if (!auth?.token) {
          setOk(false);
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/user-auth`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`, 
            },
          }
        );

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.log("User Auth Error:", error.response?.data || error.message);
        setOk(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="login" />;
}
