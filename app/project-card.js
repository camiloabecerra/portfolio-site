import Image from "next/image";
import styles from "./styles/card.module.css";
import gh_img from "./images/github-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <Image src={props.img_route} alt="Project pic" />
      <div className={styles.sub}>
        <div className={styles.text}>
          <h1>{props.name}</h1>
          <p>{props.skills}</p>
        </div>
        <a href={props.link}>
          <FontAwesomeIcon id={styles.gh} icon={faLink} />
        </a>
      </div>
    </div>
  );
}
