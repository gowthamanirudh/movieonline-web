import React, { useState } from 'react';


const Login=()=>{

    const[action, setAction]= useState("Login");
    // const [formValues, setFormValues] = useState({ name: "", email: "", password: "" });
    // const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  
    // const validate = () => {
    //   let isValid = true;
    //   const newErrors = { name: "", email: "", password: "" };
  
    //   if (action === "Sign Up" && !formValues.name.trim()) {
    //     newErrors.name = "Name is required.";
    //     isValid = false;
    //   }
  
    //   if (!formValues.email.trim()) {
    //     newErrors.email = "Email is required.";
    //     isValid = false;
    //   } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    //     newErrors.email = "Invalid email format.";
    //     isValid = false;
    //   }
  
    //   if (!formValues.password.trim()) {
    //     newErrors.password = "Password is required.";
    //     isValid = false;
    //   } else if (formValues.password.length < 6) {
    //     newErrors.password = "Password must be at least 6 characters.";
    //     isValid = false;
    //   }
  
    //   setErrors(newErrors);
    //   return isValid;
    // };
  
    // const handleSubmit = () => {
    //   if (validate()) {
    //     alert(`${action} successful!`);
    //     // Handle form submission logic here
    //   }
    // };
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormValues({ ...formValues, [name]: value });
    // };

    return(  
      <div class="relative min-h-screen">
         {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source 
          src="https://youtu.be/Po3jStA673E?si=BH-Vw-7njI_0VmZ3"  // Replace with your movie trailer URL
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
       <div class='flex flex-col m-auto mt-[50px] w-[500px] bg-slate-700 pb-8 border border-gray-300 rounded-lg'>
        <div class='flex flex-col items-center gap-2.5 w-full mt-11  '>
            <div class="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">{action}</div>
            {/* <div class='w-16 h-1.5 bg-violet-700  rounded-xl'></div> font-bold */}
        </div>
        <div class="mt-14 flex flex-col gap-7 ">
          {action==="Login" ?<div></div>: <div class="flex items-center m-auto w-full md:w-[480px] h-25 bg-slate-50 rounded-md ">
            <img class="m-0 mt-[30px]" src=" " alt="/"></img>
            <input class="h-[50px] w-[400px] bg-transparent border-0 outline-none placeholder-[#000000] text-[15px]" type="text" placeholder='Name' />
            {/* {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
        </div> }
        <div class="flex items-center m-auto w-full md:w-[480px] h-25 bg-slate-50 rounded-md">
            <img class="m-0 mt-[30px]" src=" " alt="/"></img>
            <input class="h-[50px] w-[400px] bg-transparent border-0 outline-none placeholder-[#000000] text-[15px]" type="email" placeholder='Email Id ' />
            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
        </div>
        <div class="flex items-center m-auto w-full md:w-[480px] h-25 bg-slate-50 rounded-md">
            <img class="m-0 mt-[30px]" src=" " alt="/"></img>
            <input class="h-[50px] w-[400px] bg-transparent border-0 outline-none placeholder-[#000000] text-[15px]" type="password" placeholder='Password'/>
            {/* {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} */}
        </div>
        </div>

        {action==="Sign Up" ? <div></div>:<div class='pl-16 mt-7 text-white text-lg'>Lost Password? <span class=" text-fuchsia-500 cursor-pointer">Click Here!</span></div>}

        <div class='flex gap-8 mx-auto m-12 '>
          <div class='flex justify-center items-center w-56 h-14 text-white bg-purple-700 rounded-full hover:bg-violet-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 text-lg font-bold cursor-pointer' >
            <div className={action==="Login" ? "submit gray": "submit"} onClick={()=>(setAction("Sign Up"))} >Sign up</div>
          </div>
          <div class='flex justify-center items-center w-56 h-14 text-white bg-purple-700 rounded-full hover:bg-violet-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 text-lg font-bold cursor-pointer'>
            <div className={action==="Sign Up" ?"submit gray":"submit"} onClick={()=>(setAction("Login"))}>Login</div>
          </div>
          </div>
        </div>
      </div>
       )
}

export default Login;
