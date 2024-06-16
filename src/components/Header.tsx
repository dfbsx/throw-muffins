import { Button, Title } from "@mantine/core";
import "../components/header.css";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const handleLogout = ()=>{
    localStorage.removeItem("throwMuffin")
    router.push("/")
  }
  return (
    <div className="bar">
      <div className="appName">
        {" "}
        <Title order={2} c="#1A3871">
          THROW MUFFIN
        </Title>
        <img className="icon" src="xsmuffin.svg" alt="Muffin Logo" />
      </div>
      <Button variant="filled" color="#0D1C42" radius="xl" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}
