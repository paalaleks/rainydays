import Layout from "../components/layout";
import Styles from "./contact.module.scss";

function Contact() {
  return (
    <Layout>
      <div className={Styles.contactForm}>
        <h2>
          Feel free to send us a message <br /> and we'll get back to you as
          soon as posible.
        </h2>
        <form action="">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"></textarea>
          <button className="wide-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
