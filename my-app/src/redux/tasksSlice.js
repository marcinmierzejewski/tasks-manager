import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true, isEdit: false },
  { id: 1, text: "Get good at JavaScript", completed: true, isEdit: false },
  { id: 2, text: "Master React", completed: false, isEdit: false },
  { id: 3, text: "Discover Redux", completed: false, isEdit: false },
  { id: 4, text: "Build amazing apps", completed: false, isEdit: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
            isEdit: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      // const index = state.findIndex(task => task.id === action.payload);
      // state.splice(index, 1);
      return (state = state.filter(task => task.id !== action.payload))
    },

    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },

    openEdited(state, action) {
      for (const task of state) {
        task.isEdit = false;
          if (task.id === action.payload) {
            task.isEdit = !task.isEdit;
          }
      }
    },

    closeEdited(state, _) {
      for (const task of state) {
        task.isEdit = false;
      }
    },

    editTask(state, action) {
      for (let task of state) {
        if(task.id === action.payload[0]) {
          task.text = action.payload[1];
          break;
        }
      }
    }
  },
});

export const { addTask, deleteTask, toggleCompleted, openEdited, closeEdited, editTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;