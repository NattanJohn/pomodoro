import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './TaskActions';
import { initialTaskState } from './initialTasktState';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
