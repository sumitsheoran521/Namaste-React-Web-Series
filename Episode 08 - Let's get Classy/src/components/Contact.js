import { useEffect } from "react";

const Contact = () => {
  useEffect(() => { 
    console.log("useEffect");
    const timer= setInterval(() => {
      console.log("Namaste React");
    },1000)
    return () => {
      clearInterval(timer); 
      console.log("useEffect Return");
    }
  }, []);
  console.log("Render");
  return (
    <div>
      <h1>© 2023 Swiggy</h1>
    </div>
  );
};
export default Contact;
