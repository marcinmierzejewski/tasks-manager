import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";
import { EditTask } from "../EditTask/EditTask";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const editOpen = () => setIsEdit(true);
  const editClose = () => setIsEdit(false);

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <div onClick={editOpen} className={css.text}>
        {isEdit ? <EditTask currentText={task.text} taskId={task.id}/> : task.text}
      </div>

      {isEdit ? <button onClick={editClose}>Back</button> :
        <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
      }
      
    </div>
  );
};
