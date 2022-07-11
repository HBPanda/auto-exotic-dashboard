import React, { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";
import { TasksContext } from "../../contexts/TasksContext";

import { TaskProps } from "../../contexts/TasksContext";

interface TaskComponentProps {
  task: TaskProps;
}

import copyIcon from "../../assets/copyIcon.svg";
import copyHexIcon from "../../assets/copyHex.svg";
import removeIcon from "../../assets/removeIcon.svg";

import TaskStyles from "./styles";

import { lightTheme } from "../../App";

function Task({ task }: TaskComponentProps) {
  const { removeTask, updateCheckedStatus, copyContent, copyHex } = useContext(TasksContext);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [checked, setChecked] = useState(task.checked);

  function handleRemoveTask(id: string) {
    setBeingRemoved(id);
    waitForAnimationAndRemove(id);
  }
  function handleCopyTask(id: string){
    copyContent(id);
  }
  const waitForAnimationAndRemove = (id: string) => {
    setTimeout(() => {
      removeTask(id);
    }, 250);
  };

  useEffect(() => {
    updateCheckedStatus(task, checked);
  }, [checked]);

  return (
    <TaskStyles theme={lightTheme} beingRemoved={beingRemoved === task.id} checked={task.checked}>
      <div className="left">
        <h3 hidden>{task.title}</h3>
        <p hidden>{task.content}</p>
        <div>
          <button onClick={() => handleCopyTask(task.id)}>
            <img src={copyIcon} alt="" width={15} />
          </button>
        </div>
        <div>
          <button onClick={() => copyHex(task.id)}>
              <img src={copyHexIcon} alt="" width={15} />
          </button>
        </div>
        {/* <div>
          <button onClick={() => handleRemoveTask(task.id)}>
              <img src={removeIcon} alt="" width={15} />
          </button>
        </div> */}
      </div>
      <img src={task.image} height={350} style={{padding: 15}} alt="" />
    </TaskStyles>
  );
}

export default Task;
