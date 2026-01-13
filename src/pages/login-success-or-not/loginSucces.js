import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SuccessfullyLoggedIn = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(3);

  useEffect(() => {
    if (time === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, navigate]);

  return (
    <div>
      <span className="text-4xl">😊</span>
      <h1 className="text-5xl">You are Successfully logged In</h1>
      <span>You will be redirected to Home page after {time}s....</span>
    </div>
  );
};
