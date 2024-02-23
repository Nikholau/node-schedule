import 'reflect-metadata'
import express from 'express';
import Task from '../resources/entities/Task';
import { connectionSource } from '../ormconfig';
const app = express();
app.use(express.json());

async function fetchTasks() {
  const taskRepository = connectionSource.getRepository(Task)
  const allTasks = await taskRepository.find()
  console.log("All tasks from the db: ", allTasks)
}

fetchTasks();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});


app.post('/tasks', async (req, res) => {
  const { name, description, time } = req.body;
  const taskRepository = connectionSource.getRepository(Task)
  const task = taskRepository.create({ name, description, time })
  await taskRepository.save(task)
  return res.json(task);
});

app.listen(3333, () => {
  console.log('listening on port 3333');
});