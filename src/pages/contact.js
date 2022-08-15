import Layout from "../components/layout";
import Styles from "./contact.module.scss";

function Contact() {
  return (
    <Layout>
      <div className={Styles.contactForm}>
        <h1>Howdy, this a contact form you can use</h1>
      </div>
    </Layout>
  );
}

export default Contact;
