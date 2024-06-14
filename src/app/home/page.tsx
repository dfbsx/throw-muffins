"use client";
import { Button, Flex, Pill, PillsInput, Title } from "@mantine/core";
import styles from "./page.module.css";
import Header from "@/components/Header";
import WorkoutCard from "@/components/WorkoutCard";
import { getAllPlans } from "../../api/getAllPlans";
import { useEffect, useState } from "react";
export default function Home() {
  const auth = localStorage.getItem("throwMuffin") || "{}";
  const [workoutCards, setWorkoutCards] = useState();
  useEffect(() => {
    getAllPlans(auth)
      .then((resp) => {
        setWorkoutCards(resp.data);
      })
      .catch((err) => {
        console.log("err", err);
        alert(
          err.response.data.title
            ? err.response.data.title
            : "Wystąpił nieznany błąd"
        );
      });
  },[]);
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
            <Pill withRemoveButton className={styles.pill}>
              That ass
            </Pill>
            <Pill withRemoveButton className={styles.pill}>
              Legs
            </Pill>
            <Pill withRemoveButton className={styles.pill}>
              Flat stomach
            </Pill>
            <PillsInput.Field placeholder="Choose your aims" />
          </Pill.Group>
        </PillsInput>
        <Button variant="filled" color="#F29495" size="sm" radius="xl">
          Let's magic begin!
        </Button>
      </div>
      <Title className={styles.cardsHeader} order={3}>
        Already generated:
      </Title>
      <Flex
        className={styles.grid}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        {workoutCards &&
          workoutCards.map((card: any, index: number) => (
            <WorkoutCard key={index} props={card} />
          ))}
      </Flex>
    </div>
  );
}
