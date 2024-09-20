import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formrRef = useRef();
    const [loading, setLoading]=useState(false);
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            emailjs.send('service_jc3eyia', 'template_54qkqvv', {
                from_name: form.name,
                from_email: form.email,
                to_email:'melodyang13@gmail.com',
                message: form.message
            },'4tQiAuI2LKhHZ3KDf')

            setLoading(false);
            alert('Thank you for getting in touch, I will get back to you as soon as possible!');
            setForm({name: '', email: '', message: ''});
        }catch(error){
            setLoading(false);
            console.log(error);
            alert('Something went wrong :(');
        }
        
        console.log(form);
    }
  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='assets/terminal.png' alt='terminal' className=' absolute inset-0 min-h-screen '/>
        <div className='contact-container'>
        <h3 className='head-text'>Let's Talk</h3>
        <p className='text-lg text-white-600 mt-3'> If you're looking to design and build a website or just want to say hi, feel free to reach out. </p>
        <form ref={formrRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
                <span className='field-label'> Full Name</span>
            <input type="text"  name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe'/>
            </label>
            <label className='space-y-3'>
                <span className='field-label'>Email</span>
            <input type="text"  name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com'/>
            </label>
            <label className='space-y-3'>
                <span className='field-label'> Your Message</span>
            <textarea  name='message' value={form.message} onChange={handleChange} required className='field-input' placeholder='Hi, I am interested in working with you...' rows={5}/>
            </label>
            <button type='submit' className='field-btn' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <img src='assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
            </button>
        </form>
        </div>
        </div>
       
    </section>
  )
}

export default Contact