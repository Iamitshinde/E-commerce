import { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth.js";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.js";

export default function Adminroutes() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
       
        if (!auth?.token) {
          setOk(false);
          navigate("/login");
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`,
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
          navigate("/");
        }
      } catch (error) {
        console.log("Admin Auth Error:", error.response?.data || error.message);
        setOk(false);
        navigate("/");
      }
    };

    authCheck();
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner path="login" />;
}
