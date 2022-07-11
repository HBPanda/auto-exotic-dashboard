import React, { useRef, useContext, useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import Task from "../Task";
import Select from "../Select";

import useShortcut from "../../hooks/useShortcut";

import { CategoriesContext, CategoryProps } from "../../contexts/CategoriesContext";
import { PathContext } from "../../contexts/PathContext";
import { TasksContext, TaskProps } from "../../contexts/TasksContext";
import { UserContext } from "../../contexts/UserContext";

import AEBlue from "../../assets/AEBlue.svg";

import MainStyles from "./styles";

import { lightTheme } from "../../App";

import getUserOS from "../../functions/getUserOS";
import { getTimeOfDay, getCurrentDay, getCurrentWeekDay, getCurrentMonth } from "../../functions/getDate";

function Main() {
  const { categories } = useContext(CategoriesContext);
  const { path } = useContext(PathContext);
  const { addTask, tasks } = useContext(TasksContext);
  const { user } = useContext(UserContext);

  const [content, setContent] = useState("carp");
  const [image, setImage] = useState("carp");
  const [title, setTitle] = useState("");
  const [hex, setHex] = useState("");
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState<CategoryProps>(categories[0]);
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();

    if (!title) return;

    const date = new Date();

    const newTask: TaskProps = {
      category: category,
      checked: checked,
      title: title,
      hex: hex,
      content: content,
      image: image,
      date: date.toString(),
      id: uuid(),
    };

    addTask(newTask);

    setTitle("");
    setContent("");
    setHex("");
    setImage("");
    
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [checked, isSelectingCategory]);

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  const filteredTasks = tasks.filter((task) => task.category.slug === path);

  const shortcuts = [
    {
      ctrlKey: true,
      key: "S",
      handler: () => inputRef.current?.focus(),
    },
    {
      ctrlKey: false,
      key: "Escape",
      handler: () => inputRef.current?.blur(),
    },
  ];

  useShortcut(shortcuts);

  useEffect(() => {
    const categoryBasedOnCurrentPath = categories.filter((category) => category.slug === path)[0];

    setCategory(categoryBasedOnCurrentPath);
  }, [path, categories]);

  return (
    <MainStyles theme={lightTheme} checked={checked}>
      <div id="tasks-area-wrapper">
        {path === "/" && (
          <header>
            <img src={AEBlue} alt="AE Logo" width={35} />
            <h1>
              Good {getTimeOfDay()}, {user.name}
            </h1>
            <h2>
              It's {getCurrentWeekDay()}, {getCurrentMonth()} {getCurrentDay()}
            </h2>
          </header>
        )}
        <h1 className="category-indicator">{categories.filter((category) => category.slug === path)[0]?.title}</h1>
        <div id="task-writter" onClick={() => inputRef.current?.focus()}>
          <div className="left">
            <label>
              <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
              <div className="checkbox-div" />
            </label>
            <form noValidate>
              <input
                disabled
                type="text"
                placeholder="Write a new task... (Coming soon)"
                value={title}
                ref={inputRef}
              />
            </form>
          </div>
          <div className="right" onClick={() => setIsSelectingCategory(!isSelectingCategory)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="1.25"
                y="1.25"
                width="12.5"
                height="12.5"
                rx="4.75"
                stroke={`#${category.color}`}
                strokeWidth="2.5"
              />
            </svg>

            <h4>{category.title}</h4>
            <Select
              category={category}
              setCategory={setCategory}
              isSelectingCategory={isSelectingCategory}
              setIsSelectingCategory={setIsSelectingCategory}
            />
          </div>
        </div>
        <ul>
          {filteredTasks.map((task) => (
            <Task
              task={{
                category: task.category,
                checked: task.checked,
                title: task.title,
                image: task.image,
                content: task.content,
                hex: task.hex,
                date: task.date,
                id: task.id,
              }}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </MainStyles>
  );
}

export default Main;
