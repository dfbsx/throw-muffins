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
  stylesToString,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "../components/workoutCard.css";

export default function WorkoutCard(props:any) {
  const data = props;
  const [opened, { toggle }] = useDisclosure(false);
  const date = new Date(data.props.DateCreated);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
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
          <Text fw={500}>{formattedDate}</Text>
          <Badge color="#f26c6e">{data.props.Excercises.length} Steps</Badge>
        </Group>
        <Button variant="transparent" fullWidth mt="xs" onClick={toggle}>
          {opened === false ? (
            <FaAngleDown size="2xl" style={{ color: "#a6a6a6" }} />
          ) : (
            <FaAngleUp size="2xl" style={{ color: "#a6a6a6" }} />
          )}
        </Button>
        <Collapse in={opened}>
          <Text>
            <List type="ordered" size="sm">
              {data &&
                data.props.Excercises.map((step: any, index: number) => (
                  <List.Item key={index}>
                    <span className="listItem">
                    <strong>{step.Name}</strong>
                    <a href={step.Instructions}>
                    <button
                      className="link"
                    >
                      Instruction
                    </button>
                    </a>
                    </span>
                  </List.Item>
                ))}
            </List>
          </Text>
        </Collapse>
      </Card>
    </Box>
  );
}
