import { useEffect, useState } from "react";

export default function ContactPage(){
    const myEmail = 'kartikhatwar98@gmail.com';
    const [userEmail,setUserEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [msg,setMsg] = useState('');
    const [warning,setWarning] = useState(null);
    const limit = 1500

    async function showUserEmail() {
        if ('credentials' in navigator) {
            console.log('here')
          try {
            const credentials = await navigator.credentials.get({ federated: { providers: ['https://accounts.google.com'] } });
    
            console.log(credentials)
            if (credentials && credentials.id) {
              const email = credentials.id;
              if(email) setUserEmail(email)
            } 

          } catch (error) {
            console.error('Error:', error.message);
          }
        } else {
          console.error('navigator.credentials API is not supported.');
        }
    }

    useEffect(()=>{
        showUserEmail();
        console.log("adsf")
    },[])

    const handleEmail = (e)=>{
        e.preventDefault();
        if(e.target.value.length > 0) setWarning(null)
        setUserEmail(e.target.value)
    }

    const handleSubject = (e)=>{
        e.preventDefault();
        setSubject(e.target.value)
    }

    const handleMsg = (e)=>{
        e.preventDefault();
        const msg = e.target.value;
        if(msg.length > 0) setWarning(null)
        if(msg.length <= limit) setMsg(e.target.value)
    }

    const clearAll = ()=>{
        setUserEmail(''); 
        setSubject('');
        setMsg('')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userEmail.length === 0 && msg.length === 0){
            setWarning("Email Id and Message cannot be Empty.")
        }
        else if(userEmail.length === 0) setWarning("Email Id cannot be Empty.")
        else if(msg.length === 0) setWarning("Message cannot be Empty.")
    }

    return (
    <div id="contact" className="w-full mb-8 px-0 md:px-[4rem]">
        <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Contact Me</div>

        <form onSubmit={(e)=>handleSubmit(e)} className="md:w-1/2 mx-4 md:mx-0 flex flex-col gap-5 justify-center items-center md:!ml-auto bg-glass bg-grey rounded-lg py-6 px-[2rem]">

           <div className="email flex gap-3 md:w-2/3 w-full flex-col">
            <label htmlFor="email" className="text-lg md:text-2xl font-bold">Email</label>
            <input autoComplete="false" value={userEmail} onChange={(e)=>handleEmail(e)} id="email" type="email" className="px-2 md:!px-4 py-3 w-full bg-dark rounded-md focus:border-none focus:outline-none"  />
           </div>

           <div className="subject flex gap-3 md:w-2/3 w-full flex-col">
            <label htmlFor="subject" className="text-lg md:text-2xl font-bold">Subject</label>
            <input autoComplete="false" value={subject} onChange={(e)=>handleSubject(e)} id="subject" type="text" className="px-2 md:!px-4 py-3 w-full  bg-dark rounded-md focus:border-none focus:outline-none"  />
           </div>

           <div className="msg flex gap-3 md:w-2/3 w-full flex-col">
            <label htmlFor="msg" className="text-lg md:text-2xl font-bold">Message</label>
            <textarea autoComplete="false" value={msg} onChange={(e)=>handleMsg(e)} id="msg" type="text" className="px-2 h-fit md:!px-4 py-3 w-full  bg-dark rounded-md focus:border-none focus:outline-none"  />
            <div className={`w-full flex justify-end text-sm ${msg.length === limit ? 'text-[red]' : null} font-bold opacity-50`}>{msg.length} / {limit}</div>
           </div>

           <div className="text-[red] w-full md:px-4 flex justify-center md:justify-start">{warning}</div>

           <div className="flex gap-6 flex-wrap w-full">
              <button id="submit" type="submit" className="px-4 py-2 rounded-lg font-semibold bg-green min-w-[7em]">Send</button>
              <button id="clear" type='reset' onClick={()=>clearAll()} className="px-4 py-2 rounded-lg font-semibold bg-darkgreen min-w-[7em]">Clear</button>
           </div>

            
        </form>
        
    </div>)
}
