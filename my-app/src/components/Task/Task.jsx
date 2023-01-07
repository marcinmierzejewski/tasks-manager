import { useDispatch } from "react-redux";
import { MdClose, MdOutlineBackspace } from "react-icons/md";
import {
  deleteTask,
  toggleCompleted,
  openEdited,
  closeEdited,
} from "../../redux/tasksSlice";
import css from "./Task.module.css";
import { EditTask } from "../EditTask/EditTask";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  const editOpen = () => dispatch(openEdited(task.id));
  const editClose = () => dispatch(closeEdited());

  return (
    <div className={css.wrapper}>
      {task.isEdit ? (
        <button className={css.btn} onClick={editClose}>
          <MdOutlineBackspace size={24} />
        </button>
      ) : (
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
      )}

      <div onClick={editOpen} className={css.text}>
        {task.isEdit ? (
          <EditTask currentText={task.text} taskId={task.id} />
        ) : (
          task.text
        )}
      </div>
      {!task.isEdit && (
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      )}
    </div>
  );
};
