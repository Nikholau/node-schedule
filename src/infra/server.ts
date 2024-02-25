import 'reflect-metadata'
import express from 'express';
import Task from '../resources/entities/Task';
import { connectionSource } from '../ormconfig';
const app = express();
app.use(express.json());

connectionSource.initialize()
    .then(() => {
       console.log('conectado ao banco de dados');
    })
    .catch((error) => console.log(error))

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await connectionSource.getRepository(Task).find();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar tarefas', error });
  }
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