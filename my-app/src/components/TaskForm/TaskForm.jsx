import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../redux/selectors';
import { Button } from "../Button/Button";
import { addTask } from "../../redux/tasksSlice";
import { MdPostAdd } from "react-icons/md";
import { saveToLocalStorage } from '../../services/localStorageServices';
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks)

  useEffect(() => {
    saveToLocalStorage("tasks", tasks);
  }, [tasks]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">
        <MdPostAdd size={24} />
      </Button>
    </form>
    </div>
    
  );
};
