import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, Checkbox, StackDivider } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" width="100%">
          {tasks.map((task) => (
            <HStack key={task.id} justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(task.id)}>
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete Task" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
