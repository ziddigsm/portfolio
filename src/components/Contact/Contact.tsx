import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleEntry = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    emailjs
      .sendForm(
        atob(import.meta.env.VITE_EMAILJS_SERVICE_ID) || "",
        atob(import.meta.env.VITE_EMAILJS_TEMPLATE_ID) || "",
        form,
        atob(import.meta.env.VITE_EMAILJS_USER_ID) || ""
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error);
          alert("An error occurred, please try again later.");
        }
      );
    form.reset();
  };

  return (
    <div className="contact-form-container" id="Contact">
      <div>
        <h1>Get in Touch</h1>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleEntry}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleEntry}
              required
            />
          </div>
        </div>
        <div className="form-group-contact">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleEntry}
            required
          />
        </div>
        <div className="form-group-contact">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleEntry}
            required
          />
        </div>
        <div className="form-group-contact">
          <label>Phone</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleEntry}
            required
          />
        </div>
        <div className="form-group-contact">
          <label>Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleEntry}
            required
          ></textarea>
        </div>
        <div className="buttons">
          <button
            type="reset"
            className="reset"
            onClick={() =>
              setFormData({
                first_name: "",
                last_name: "",
                company: "",
                email: "",
                mobile: "",
                message: "",
              })
            }
          >
            Clear All
          </button>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
