"use client";
import {
  Button,
  Modal,
  Title,
  Text,
  Input,
  PasswordInput,
} from "@mantine/core";
import styles from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { register } from "../api/register";
import { login } from "../api/login";
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const [loginM, { open: ologin, close: clogin }] = useDisclosure(false);
  const [registerM, { open: oregister, close: cregister }] =
    useDisclosure(false);
  const [registerData, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [logData, setLogData] = useState({
    username: "",
    password: "",
  });
  const handleRegister = () => {
    register(registerData)
      .then((resp) => {
        router.push('/home')
        console.log("Resp", resp);
        //setisLoggedIn(true);
        /*dispatch(authenticate(resp.data.userName,resp.data.token))
          .then(()=>{
              navigate("/accountview")
            })*/
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = () => {
    console.log(logData);
    login(logData)
      .then((resp) => {
        router.push('/home')
      })
      .catch((error) => {
        alert("Wprowadzone dane są niepoprawne");
      });
  };
  return (
    <div className={styles.homeLayout}>
      <Modal opened={loginM} onClose={clogin} withCloseButton={false} centered>
        <div className={styles.modal}>
          <Text size="xl">How's your muffins?</Text>
          <Input
            size="md"
            radius="xl"
            placeholder="Login"
            value={logData.username}
            onChange={(e) =>
              setLogData({ ...logData, username: e.target.value })
            }
          />
          <Input
            size="md"
            radius="xl"
            placeholder="Password"
            value={logData.password}
            onChange={(e) =>
              setLogData({ ...logData, password: e.target.value })
            }
          />
          <Button
            variant="filled"
            color="#F29495"
            size="md"
            radius="xl"
            onClick={handleLogin}
          >
            I'm back!
          </Button>
          <Text size="xs" c="dimmed">
            No account yet?{" "}
            <span onClick={oregister} className={styles.textButton}>
              Click here
            </span>
          </Text>
        </div>
      </Modal>
      <Modal
        opened={registerM}
        onClose={cregister}
        withCloseButton={false}
        centered
      >
        <div className={styles.modal}>
          <Text size="xl">Let us change your life!</Text>
          <Input
            size="md"
            radius="xl"
            placeholder="Login"
            value={registerData.username}
            onChange={(e) =>
              setRegister({ ...registerData, username: e.target.value })
            }
          />
          <Input
            size="md"
            radius="xl"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegister({ ...registerData, email: e.target.value })
            }
          />
          <PasswordInput
            style={{ width: "78%" }}
            size="md"
            radius="xl"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegister({ ...registerData, password: e.target.value })
            }
          />
          <Button
            variant="filled"
            color="#F29495"
            size="md"
            radius="xl"
            onClick={handleRegister}
          >
            I'm in!
          </Button>
          <Text size="xs" c="dimmed">
            Already have an account?{" "}
            <span onClick={ologin} className={styles.textButton}>
              Log in
            </span>
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
