import styles from "./styles/page.module.css";
import ProjectCard from "./project-card.js";
import Link from "next/link";
import Image from "next/image";
import plt_img from "./images/plt15k.png";
import cat_img from "./images/cat_image.png";
import bs_img from "./images/bs.png";
import fn_img from "./images/fakenews.png";
import io_img from "./images/cache.png";
import game_img from "./images/2048.png";
import yo from "./images/yo.jpg";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.topnav}>
        <h2>Camilo Becerra</h2>
        <div id={styles.right}>
          <Link href="https://github.com/camiloabecerra">
            <h2>Github</h2>
          </Link>
          <Link href="https://www.linkedin.com/in/camilo-becerra-72b7252a3/">
            <h2>LinkedIn</h2>
          </Link>
          <Link href="https://drive.google.com/file/d/1XhfEoSkIQukzNwDvTG_giz9JrRfpmpzy/view?usp=sharing">
            <h2>Resume</h2>
          </Link>
        </div>
      </div>
      <div className={styles.me}>
        <Image id={styles.yo} src={yo} alt="Yo" />
        <div id={styles.desc}>
          <h2>Camilo Becerra</h2>
          <p>
            Applied Mathematics & Computer Science Student at Brown University
          </p>
        </div>
      </div>
      <div className={styles.projects}>
        <ProjectCard
          name="Restaurant Recommendation Algorithm"
          img_route={plt_img}
          link="https://drive.google.com/drive/folders/1-9tSGEyte5mdgwMpEaDqYSS4Yp72sx0v?usp=sharing"
          skills="Python, Sklearn, Word2Vec"
        />
        <ProjectCard
          name="Cataloguer App"
          img_route={cat_img}
          link="https://github.com/camiloabecerra/cataloguer"
          skills="Python, Flask, HTML/CSS, MySQL, AWS RDS/EC2"
        />
        <ProjectCard
          name="Recommendation List"
          img_route={cat_img}
          link="https://github.com/camiloabecerra/bootcamp-final"
          skills="React, NextJS, Firebase NoSQL, HTML/CSS"
        />
        <ProjectCard
          name="Financial Tools Web App"
          img_route={bs_img}
          link="https://github.com/camiloabecerra/financial-tools"
          skills="Python, Streamlit, AlphaVantage API"
        />
        <ProjectCard
          name="Flexible Board 2048 Videogame"
          img_route={game_img}
          link="https://code.pyret.org/editor#program=1Vgbcz1OWoc-1B9pFnrxc9z6UfpKZTr3P"
          skills="Pyret, Unit Testing"
        />
        <ProjectCard
          name="Fake News Detector"
          img_route={fn_img}
          link="https://colab.research.google.com/drive/1sD-AOEMj8PoNJCiGH8K4udhkpQPeIW9c?usp=sharing"
          skills="Python, NLTK, Tensorflow"
        />
        <ProjectCard
          name="File I/O Memory Cache"
          img_route={io_img}
          link="https://github.com/csci0300/cs300-s24-projects-camiloabecerra"
          skills="C"
        />
      </div>
    </div>
  );
}
