// import React, { useState } from 'react';
// import './contactStyles.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     doctor: '',
//     message: ''
//   });
  
//   const doctors = [
//     "Dr. Ahmed Khan (Cardiology)",
//     "Dr. Priya Sharma (Gynaecology)",
//     "Dr. Rajesh Patel (Orthopedics)",
//     "Dr. Meera Desai (Pediatrics)",
//     "Dr. Vikram Singh (Neurology)"
//   ];
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted successfully! We'll contact you soon.");
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       doctor: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contact_class_root_container">
//       <div className="contact_class_inner_wrapper">
//         <div className="contact_class_left_section">
//           <h2 className="contact_class_section_title">Contact Information</h2>
          
//           <div className="contact_class_address_group">
//             <h3 className="contact_class_subtitle">Hyderabad Branch 1</h3>
//             <p className="contact_class_address_line">12, 234, Adarsh Nagar,</p>
//             <p className="contact_class_address_line">Adjeetpura Nagar, Opp., IDPL</p>
//             <p className="contact_class_address_line">Colony, Balanagar,</p>
//             <p className="contact_class_address_line">Secunderabad, Hyderabad,</p>
//             <p className="contact_class_address_line">Telangana 500037</p>
//           </div>
          
//           <div className="contact_class_address_group">
//             <h3 className="contact_class_subtitle">Hyderabad Branch 2</h3>
//             <p className="contact_class_address_line">5-120/2, Jeedimedia Main</p>
//             <p className="contact_class_address_line">Road, HMT Rd, opposite Asian</p>
//             <p className="contact_class_address_line">sha theater, Shiva Nagar,</p>
//             <p className="contact_class_address_line">Chinthal, Hyderabad,</p>
//             <p className="contact_class_address_line">Telangana 500054</p>
//           </div>
          
//           <div className="contact_class_contact_info">
//             <h3 className="contact_class_subtitle">Email & Phone</h3>
//             <p className="contact_class_email">
//               <strong>info@alavihospitals.com</strong>
//             </p>
//             <p className="contact_class_support_text">
//               Need support? Drop us an email
//             </p>
            
//             <div className="contact_class_phone_numbers">
//               <p className="contact_class_phone">095331 21257</p>
//               <p className="contact_class_phone">9160 606 108</p>
//               <p className="contact_class_phone">040-49 99 49 49</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="contact_class_right_section">
//           <h2 className="contact_class_section_title">Send us a Message</h2>
          
//           <form className="contact_class_form" onSubmit={handleSubmit}>
//             <div className="contact_class_form_group">
//               <label htmlFor="name" className="contact_class_form_label">Enter your name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="contact_class_form_input"
//                 required
//               />
//             </div>
            
//             <div className="contact_class_form_group">
//               <label htmlFor="email" className="contact_class_form_label">Enter email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="contact_class_form_input"
//                 required
//               />
//             </div>
            
//             <div className="contact_class_form_group">
//               <label htmlFor="subject" className="contact_class_form_label">Enter subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="contact_class_form_input"
//                 required
//               />
//             </div>
            
//             <div className="contact_class_form_group">
//               <label htmlFor="doctor" className="contact_class_form_label">Select a Doctor</label>
//               <select
//                 id="doctor"
//                 name="doctor"
//                 value={formData.doctor}
//                 onChange={handleChange}
//                 className="contact_class_form_select"
//                 required
//               >
//                 <option value="">Choose a doctor</option>
//                 {doctors.map((doc, index) => (
//                   <option key={index} value={doc}>{doc}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="contact_class_form_group">
//               <label htmlFor="message" className="contact_class_form_label">Enter Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="contact_class_form_textarea"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>
            
//             <button type="submit" className="contact_class_submit_button">
//               SUBMIT
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// src/components/AlaviContactPage.jsx
import React, { useState , useRef } from 'react';
import './contactStyles.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../context/LanguageContext';
// import ContactUs from '../components/ContactUs';


const Contact = () => {

const { t } = useTranslation();
  
const form = useRef();
  const handleCombinedSubmit = async (e) => {
      e.preventDefault();

      sendEmail(e);           // Send email via EmailJS first
      await handleSubmit(e);  // Then handle the form logic (e.g., show message, reset form)
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x8yyacq', 'template_c4fqyun', form.current, {
        publicKey: 'Ige6zuCqFXM_pSemu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    doctor_name: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const doctors = [
    " ",
    "Dr. Ahmed Khan (Cardiology)",
    "Dr. Priya Sharma (Gynaecology)",
    "Dr. Rajesh Patel (Orthopedics)",
    "Dr. Meera Desai (Pediatrics)",
    "Dr. Vikram Singh (Neurology)"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would normally be an API call to your backend
      // For demo purposes, we'll simulate the email sending
      console.log('Email would be sent to palleharsha455@gmail.com with:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage('form_success_message');
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        doctor_name: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitMessage('form_error_message');
    } finally {
      setIsSubmitting(false);
    }
    

  };

  return (
    <div className="alavi_contact_root_container">
      <div className="alavi_contact_inner_wrapper">
        <div className="alavi_contact_left_section">
          <h2 className="alavi_contact_section_title">{t('contact_information_heading')}</h2>
          
          <div className="alavi_contact_address_group">
            <h3 className="alavi_contact_subtitle">{t('hyderabad_branch1_heading')}</h3>
            <p className="alavi_contact_address_line">{t('hyderabad_branch1_line1')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch1_line2')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch1_line3')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch1_line4')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch1_line5')}</p>
          </div>
          
          <div className="alavi_contact_address_group">
            <h3 className="alavi_contact_subtitle">{t('hyderabad_branch2_heading')}</h3>
            <p className="alavi_contact_address_line">{t('hyderabad_branch2_line1')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch2_line2')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch2_line3')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch2_line4')}</p>
            <p className="alavi_contact_address_line">{t('hyderabad_branch2_line5')}</p>
          </div>
          
          <div className="alavi_contact_contact_info">
            <h3 className="alavi_contact_subtitle">{t('email_phone_heading')}</h3>
            <p className="alavi_contact_email">
              <strong>info@demohospitals.com</strong>
            </p>
            <p className="alavi_contact_support_text">
             {t('support_prompt')}
            </p>
            
            <div className="alavi_contact_phone_numbers">
              <p className="alavi_contact_phone">095331 21257</p>
              <p className="alavi_contact_phone">9160 606 108</p>
              <p className="alavi_contact_phone">040-49 99 49 49</p>
            </div>
          </div>
        </div>
        
        <div className="alavi_contact_right_section">
          <h2 className="alavi_contact_section_title">{t('send_message_link')}</h2>
          
          <form className="alavi_contact_form" ref={form} onSubmit={handleCombinedSubmit}>
            <div className="alavi_contact_form_group">
              <input
                type="text"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                className="alavi_contact_form_input"
                placeholder={t('form_name_placeholder')}
                required
              />
            </div>
            
            <div className="alavi_contact_form_group">
              <input
                type="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                className="alavi_contact_form_input"
                placeholder={t('form_email_placeholder')}
                required
              />
            </div>
            
            {/* <div className="alavi_contact_form_group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="alavi_contact_form_input"
                placeholder={t('form_subject_placeholder')}
                required
              />
            </div> */}
            
            <div className="alavi_contact_form_group">
              <select
                name="doctor_name"
                value={formData.doctor}
                onChange={handleChange}
                className="alavi_contact_form_select"
                required
              >
                {doctors.map((doc, index) => (
                  <option key={index} value={doc}>{t('form_select_doctor_placeholder')}{doc}</option>
                ))}
              </select>
            </div>
            
            <div className="alavi_contact_form_group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="alavi_contact_form_textarea"
                placeholder={t('form_message_placeholder')}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              value="Send"
              className="alavi_contact_submit_button"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('form_submitting_button') : t('form_submit_button')}
            </button>
            
            {submitMessage && (
              <div className={`alavi_contact_submit_message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    <div>
      {/* <ContactUs /> */}
    </div>
    </div>
  );
};

export default Contact;