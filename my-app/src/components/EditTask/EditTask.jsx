import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "../Button/Button";
import { editTask } from "../../redux/tasksSlice";
import css from "./EditTask.module.css";

export const EditTask = ({currentText, taskId }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(editTask([taskId, form.elements.text.value]));
    form.reset();
  };

  const [taskText, setTaskText] = useState(currentText);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder={currentText}
        value={taskText}
        onChange={(e)=>setTaskText(e.target.value)}
      />
      <Button type="submit">Edit</Button>
    </form>
  );
};
