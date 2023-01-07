import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "../Button/Button";
import { MdOutlineEditNote } from "react-icons/md";
import { editTask, closeEdited } from "../../redux/tasksSlice";
import css from "./EditTask.module.css";

export const EditTask = ({currentText, taskId }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(editTask([taskId, form.elements.text.value]));
    dispatch(closeEdited());
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
      <Button type="submit">
        <MdOutlineEditNote size={24} />
      </Button>
    </form>
  );
};
