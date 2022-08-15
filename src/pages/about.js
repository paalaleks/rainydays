import Layout from "../components/layout";
import Styles from "./about.module.scss";
import team from "../images/aboutUs_img.png";

function About() {
  return (
    <Layout>
      <div className={Styles.about}>
        <div>
          <h2>Who are Rainy Days clothing company?</h2>
          <p>
            Our great colleagues make the difference. It’s when we share our
            skills, knowledge and experience we become one team. Diversity makes
            us strong. We encourage and help each other to achieve our goals,
            why always having our customers’ and company’s best interest in
            mind. We win as a team, we lose as a team. We have fun as a team.
            We’re on this great shared adventure together.
          </p>

          <h2>We belive in people!</h2>
          <p>
            With belief and trust in the people around you, anything is
            possible. That’s why we build our workplace on trust, respect,
            inclusiveness and integrity.We challenge you with great
            responsibility from the start, because when you develop, the company
            develops too. Every one of us can make a difference. So have fun, be
            yourself and respect others for who they are. Together we can do
            great things.
          </p>

          <h2>Entrepreneurial spirit.</h2>
          <p>
            The day we stop acting like entrepreneurs, we’ll be just another
            fashion company. Our success is built on creativity, innovation and
            the excitement of making immediate impact. So whatever our role, we
            look for opportunity and take initiatives that set our business in
            motion. Although we’re big, breaking new ground is just as important
            today as it was when we started. We’re still competing for every
            single customer’s heart, and we work hard to continue to be their
            first choice. Every day. Everywhere.
          </p>

          <h2>Address:</h2>
          <p>
            Rainy days AB Mäster Samuelsgatan 46A SE -106 38 Stockholm SWEDEN
          </p>
        </div>
        <div>
          <img src={team} alt="Team photo" />
        </div>
      </div>
    </Layout>
  );
}

export default About;
