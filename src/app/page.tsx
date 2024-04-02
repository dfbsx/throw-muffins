import { Button, Title } from "@mantine/core";
import styles from "./page.module.css"

export default function HomePage() {
  return <div className={styles.homeLayout}>
    <div className={styles.headerbar}>
      <Button variant="outline" color="#0D1C42" radius="xl">Sign in</Button>
      <Title fw={300} order={2}>/</Title>
      <Button variant="filled" color="#0D1C42" radius="xl">Sign up</Button>
    </div>
    <div className={styles.contentContainer}>
    <div className={styles.textContainer}>
    <Title className={styles.siteTitle}>Throw Muffin</Title>
    <div className={styles.secondaryPart}>
    <Title className={styles.andSign}>&</Title>
    <div className={styles.descContainer}>
    <Title className={styles.siteDesc}>generate your</Title>
    <Title className={styles.siteDesc}>dream <span style={{color:"#F29495"}}>body</span></Title>
    </div>
    </div>
    </div>
    <div className={styles.imageContainer}>
    <img src="muffin.svg" alt="Muffin"/>
    </div>
    </div>
    <img className={styles.vave} src="vawe.svg" alt="Vave"/>
  </div>;
}