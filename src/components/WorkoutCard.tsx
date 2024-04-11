import {
  Badge,
  Box,
  Button,
  Card,
  Collapse,
  Group,
  Image,
  List,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function WorkoutCard() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box w={300} mx="auto">
      <Card shadow="lg" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1558017487-06bf9f82613a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={160}
            alt="Workout"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Flat stomach</Text>
          <Badge color="#f26c6e">5 steps</Badge>
        </Group>
        <Button variant="transparent" fullWidth mt="xs" onClick={toggle}>
          {opened === false?<FaAngleDown size="2xl" style={{ color: "#a6a6a6" }} />:<FaAngleUp size="2xl" style={{ color: "#a6a6a6" }} />}
          
        </Button>
        <Collapse in={opened}>
          <Text>
            <List type="ordered" size="sm">
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </Text>
        </Collapse>
      </Card>
    </Box>
  );
}
