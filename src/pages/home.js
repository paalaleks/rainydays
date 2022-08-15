import Styles from "./home.module.scss";
import Layout from "../components/layout";
import insta from "../images/insta/insta.png";
import insta_2 from "../images/insta/insta_2.png";
import insta_3 from "../images/insta/insta_3.png";
import insta_4 from "../images/insta/insta_4.png";
import insta_5 from "../images/insta/insta_5.png";
import insta_6 from "../images/insta/insta_6.png";
import instaLogo from "../images/instaposts.png";
import couple from "../images/environment_couple.png";

function Home() {
  return (
    <Layout>
      <div className={Styles.heartBg}>
        <div></div>
      </div>
      <section className={Styles.home}>
        <div className={Styles.homeContainer}>
          <h3>
            Rainy Days clothing gives you couples discount on outdoor clothing
          </h3>
          <p>
            For every product purchased by your spouse you will get a 50%
            discount on the next purchase. Receive additional 10% by posting a
            romantic picture on instagram. Use: #rainydayscouplesdiscount
          </p>
          <img
            src={instaLogo}
            alt="Posts from Instagram"
            className={Styles.instaLogo}
          />
        </div>
        <div className={Styles.homeImagesContainer}>
          <div className={Styles.homeImages}>
            <img src={insta} alt="instagram 1" />
          </div>
          <div className={Styles.homeImages}>
            <img src={insta_2} alt="instagram 2" />
          </div>
          <div className={Styles.homeImages}>
            <img src={insta_3} alt="instagram 3" />
          </div>
          <div className={Styles.homeImages}>
            <img src={insta_4} alt="instagram 4" />
          </div>
          <div className={Styles.homeImages}>
            <img src={insta_5} alt="instagram 5" />
          </div>
          <div className={Styles.homeImages}>
            <img src={insta_6} alt="instagram 6" />
          </div>
        </div>
      </section>
      <section className={Styles.policy}>
        <div>
          <img src={couple} alt="environmental friendly couple" />
        </div>
        <h3>Our environmental policy</h3>
        <p>
          The fashion industry weighs heavy on natural resources, which is one
          reason Rainy Days group has set up clear goals going ahead: our
          mission is to only use recycled or other sustainably sourced materials
          by 2030. Also, far too many textiles end up in trash bins and
          landfills — we’re talking thousands of tonnes, regularly thrown away
          with household. But — when we work thoroughly with upcycling,
          recycling and reusing, rather than using up even more virgin
          resources, we’re onto something really good. Because one of many ways
          to tackle this issue is to change the way we make, use and dispose of
          clothing. This is one of many reasons you can drop off your old
          clothes and discarded textiles at several of Rainy Days Group’s
          brands, and the reason many of them have launched upcycling
          initiatives.
        </p>
        <button className="text-only-button">
          Read more<i className="fa-solid fa-arrow-right"></i>
        </button>
      </section>
    </Layout>
  );
}

export default Home;
