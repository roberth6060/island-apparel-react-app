import { Container } from "./styles/Contact";
// import "./styles/Contact.scss";
const Contact = () => (
  <Container>
    <form action="action_page.php">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />
      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  </Container>
);

export default Contact;
