import type { TaskModel } from '../models/TaskModel';

export function getTaskType(task: TaskModel) {
  if (task.type === 'workTime') return 'Foco';
  if (task.type === 'shortBreakTime') return 'Descanso Curto';
  return 'Descanso Longo';
}
