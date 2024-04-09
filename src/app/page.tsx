"use client";
import { Button, Modal, Title, Text, Input } from "@mantine/core";
import styles from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";

export default function HomePage() {
  const [login, { open: ologin, close: clogin }] = useDisclosure(false);
  const [register, { open: oregister, close: cregister }] =
    useDisclosure(false);
  return (
    <div className={styles.homeLayout}>
      <Modal opened={login} onClose={clogin} withCloseButton={false} centered>
        <div className={styles.modal}>
          <Text size="xl">How's your muffins?</Text>
          <Input size="md" radius="xl" placeholder="Login" />
          <Input size="md" radius="xl" placeholder="Password" />
          <Button variant="filled" color="#F29495" size="md" radius="xl" >
            I'm back!
          </Button>
          <Text size="xs" c="dimmed">
            No account yet?{" "}
            <span onClick={oregister} className={styles.textButton}>Click here</span>
          </Text>
        </div>
      </Modal>
      <Modal
        opened={register}
        onClose={cregister}
        withCloseButton={false}
        centered
      >
        <div className={styles.modal}>
          <Text size="xl">Let us change your life!</Text>
          <Input size="md" radius="xl" placeholder="Login" />
          <Input size="md" radius="xl" placeholder="Password" />
          <Button variant="filled" color="#F29495" size="md" radius="xl">
            I'm in!
          </Button>
          <Text size="xs" c="dimmed">
            Already have an account?{" "}
            <span onClick={ologin} className={styles.textButton}>Log in</span>
          </Text>
        </div>
      </Modal>
      <div className={styles.headerbar}>
        <Button variant="outline" color="#0D1C42" radius="xl" onClick={ologin}>
          Sign in
        </Button>
        <Title fw={300} order={2}>
          /
        </Title>
        <Button
          variant="filled"
          color="#0D1C42"
          radius="xl"
          onClick={oregister}
        >
          Sign up
        </Button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Title className={styles.siteTitle}>Throw Muffin</Title>
          <div className={styles.secondaryPart}>
            <Title className={styles.andSign}>&</Title>
            <div className={styles.descContainer}>
              <Title className={styles.siteDesc}>generate your</Title>
              <Title className={styles.siteDesc}>
                dream <span style={{ color: "#F29495" }}>body</span>
              </Title>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="muffin.svg" alt="Muffin" />
        </div>
      </div>
      <img className={styles.vave} src="wave.svg" alt="Wave" />
    </div>
  );
}
