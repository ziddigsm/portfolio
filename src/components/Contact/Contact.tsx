import "./Contact.css";
import emailjs from "emailjs-com";

export function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    //console.log(process.env.REACT_APP_SERVICE_ID);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        form,
        import.meta.env.VITE_EMAILJS_USER_ID || ""
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
            <input type="text" name="first_name" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="last_name" required />
          </div>
        </div>
        <div className="form-group-contact">
          <label>Company</label>
          <input type="text" name="company" required />
        </div>
        <div className="form-group-contact">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group-contact">
          <label>Phone</label>
          <input type="tel" name="mobile" required />
        </div>
        <div className="form-group-contact">
          <label>Message</label>
          <textarea name="message" rows={5} required></textarea>
        </div>
        <div className="buttons">
          <button type="reset" className="reset">
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
