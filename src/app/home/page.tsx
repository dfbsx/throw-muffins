import { Title } from "@mantine/core";
import styles from "./page.module.css";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <img className={styles.imageBackground} src="gym.jpg" alt="Gym" />
      <Title className={styles.bannerText} order={1}>
        It's a good day <br/> to generate a new workout
      </Title>
      <div className={styles.generateContainter}>
    containter
      </div>
    </div>
  );
}
