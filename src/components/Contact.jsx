import React, { useRef, useState } from 'react'

const Contact = () => {
  
  const formRef=useRef()

  const [loading,setLoading]=useState(false)

  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(
      (prev) => (
        {
          ...prev,
          [name]: value,
        }
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true)
      const response = await fetch("https://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); 
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally{
      setLoading(false)
    }
  };  

  return (
    <section className='c-space my-20 relative'>
       <img src="/assets/terminal.png" alt="terminal"  className='absolute inset-0 w-full h-full z-0'/>
        
      <div className='relative z-10 min-h-screen flex items-center justify-center  flex-col'>

        <h3 className='head-text'>Contact Me</h3>
        

        <div className='head-text'>

          <h3 className='head-text'>Let's talk</h3>

          <p className='text-lg text-white-600 mt-3'>
          Whether you're looking to build a new website, improve your existing platform,or bring a unique project to life,I'm here to help
          </p>

        </div>

        <form  ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
          
          <label htmlFor="space-y-3">

            <span className='field-label'>Full Name</span>
            <input
             type="text" 
             name="name"
             value={form.name}
             onChange={handleChange}
             required
             className='field-input'
             placeholder='Jhon Doe'
             />

          </label> 

          <label htmlFor="space-y-3">

            <span className='field-label'>Email</span>
            <input
             type="text" 
             name="email"
             value={form.email}
             onChange={handleChange}
             required
             className='field-input'
             placeholder='jhondoe@gmail.com'
             />

          </label> 

          <label htmlFor="space-y-3">
            
            <span className='field-label'>Your Message</span>
            <textarea
             name="message"
             value={form.message}
             onChange={handleChange}
             required
             rows={5}
             className='field-input'
             placeholder='I would like to work  with you'
             />

          </label>

          <button className='field-btn' type="submit" disabled={loading}>
            {loading?'Sending':"Send Message"}
            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
          </button> 
        
          
        </form>

      </div>

    </section>
  )
}

export default Contact