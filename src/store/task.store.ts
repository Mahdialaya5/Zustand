import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Task{
  id: number;
  text: string;
}

interface TaskStore{
  Tasks: Task[];
  addTask: (task: string) => void;

}

const useTaskStore=create<TaskStore>()(
  devtools(
    persist<TaskStore>(
      (set,get) => ({
        Tasks: [],
        addTask: (task:string) =>
          set((state) => {
            const newTasks=[...state.Tasks,{ id: Date.now(),text:task }];
            return { Tasks: newTasks };
          })
        
      }),
      // local storage =>
      {
        name: "tasks-storage",
      }
    )));

export default useTaskStore