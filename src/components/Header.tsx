import { Button, Title } from "@mantine/core";
import "../components/header.css";
export default function Header() {
  return (
    <div className="bar">
      <div className="appName">
        {" "}
        <Title order={2} c="#1A3871">
          THROW MUFFIN
        </Title>
        <img className="icon" src="xsmuffin.svg" alt="Muffin Logo" />
      </div>
      <Button variant="filled" color="#0D1C42" radius="xl">
        Log out
      </Button>
    </div>
  );
}
