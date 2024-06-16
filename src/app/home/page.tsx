"use client";
import { Button, CheckIcon, Combobox, Flex, Group, Pill, PillsInput, Title, useCombobox } from "@mantine/core";
import styles from "./page.module.css";
import Header from "@/components/Header";
import WorkoutCard from "@/components/WorkoutCard";
import { getAllPlans } from "../../api/getAllPlans";
import {generateWorkout} from "../../api/generateWorkout"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const auth:string = localStorage.getItem("throwMuffin") || "{}";
  const [workoutCards, setWorkoutCards] = useState<React.ReactNode[]>();
  const aims = ['Chest','Shoulder','Biceps','Triceps','Legs','Cardio'];
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);
  const [reload,setReload] =useState(false);
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
  },[reload]);
  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [ val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));
  console.log(!value[0])
  const handleGenerate = () =>{
    if(!value[0]){
      alert('Please, select one aim')
    }
    else{
    generateWorkout(auth,value[0])
      .then((resp) => {
        setReload(!reload)
      })
      .catch((err) => {
        console.log("err", err);
        alert(
          err.response.data.title
            ? err.response.data.title
            : "Wystąpił nieznany błąd"
        );
      });
    }
  }

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = aims
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <div className={styles.page}>
      <Header />
      <img className={styles.imageBackground} src="gym.jpg" alt="Gym" />
      <Title className={styles.bannerText} order={1}>
        It's a good day <br /> to generate a new workout
      </Title>
      <div className={styles.generateContainter}>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()} size="md">
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
        <Button variant="filled" color="#F29495" size="sm" radius="xl" onClick={handleGenerate}>
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
