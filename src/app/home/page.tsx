"use client"
import { Button, Pill, PillsInput, Title } from "@mantine/core";
import styles from "./page.module.css";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <img className={styles.imageBackground} src="gym.jpg" alt="Gym" />
      <Title className={styles.bannerText} order={1}>
        It's a good day <br /> to generate a new workout
      </Title>
      <div className={styles.generateContainter}>
        <PillsInput size="md">
          <Pill.Group>
            <Pill withRemoveButton className={styles.pill}>That ass</Pill>
            <Pill withRemoveButton className={styles.pill}>Legs</Pill>
            <Pill withRemoveButton className={styles.pill}>Flat stomach</Pill>
            <PillsInput.Field placeholder="Choose your aims" />
          </Pill.Group>
        </PillsInput>
        <Button variant="filled" color="#F29495" size="sm" radius="xl" >
            Let's magic begin!
          </Button>
      </div>
    </div>
  );
}
