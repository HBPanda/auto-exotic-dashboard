import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({} as TasksContextProps);

import { CategoryProps } from "./CategoriesContext";

export interface TaskProps {
  category: CategoryProps;
  checked: boolean;
  hex: string;
  image: string;
  content: string;
  title: string;
  date: string;
  id: string;
}

interface TasksContextProps {
  tasks: TaskProps[];
  addTask: (newTask: TaskProps) => void;
  copyContent: (id: string) => void
  copyHex: (id: string) => void
  removeTask: (id: string) => void;
  updateCheckedStatus: (updatedTask: TaskProps, checked: boolean) => void;
}

interface Props {
  children?: React.ReactNode;
}

let defaultSignage: Array<TaskProps> = [
  {
    id: '1',
    title: "Auto Exotic | Details: (2/2/25)",
    content: "Auto Exotic",
    image: "https://cdn.discordapp.com/attachments/961735310973227069/995937335088795729/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "3275f0",
    date: new Date().toString()
  },
  {
    id: '2',
    title: "Is Open | Details: (1/2/25)",
    content: "IS OPEN",
    image: "https://cdn.discordapp.com/attachments/961735310973227069/995936650028908594/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '3',
    title: "No Masks | Details: (1/2/25)",
    content: "- No Masks -",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982398809990656020/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "3275f0",
    date: new Date().toString()
  },
  {
    id: '4',
    title: "No Bullshit | Details: (1/2/25)",
    content: "- No Bullshit -",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982398809990656020/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '5',
    title: "No Problems | Details: (1/2/25)",
    content: "- No Problems -",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982398809990656020/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "3275f0",
    date: new Date().toString()
  },
  {
    id: '6',
    title: "Auto (Sign Signature) | Details: (2/2/25)",
    content: "A\nU\nT\nO",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982399316809351199/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "3275f0",
    date: new Date().toString()
  },
  {
    id: '7',
    title: "Exotic (Sign Signature) | Details: (2/2/25)",
    content: "E\nx\no\nt\ni\nc",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982399316809351199/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '8',
    title: "Car and bike bay | Details(2/5/25)",
    content: "car and bike bay",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982399697794777159/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '9',
    title: "Truck and SUV Bay | Details(2/5/25)",
    content: "truck and suv bay",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982399697794777159/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '10',
    title: "Menu (Header) | Details(1.5/2/25)",
    content: "MENU :",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982402661607419914/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "3275f0",
    date: new Date().toString()
  },
  {
    id: '11',
    title: "Menu (Content) part 1 | Details(0.8/4/25)",
    content: "Repairs - $300\nCar Wash - $100\nFruit Cup - $150\nPuddin' Cup - $150",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982402662022668328/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '12',
    title: "Menu (Content) part 2 | Details(0.8/4/25)",
    content: "Suspension - 5k\nXenons - 3k\nNeon Kit - 5l\nCosmetics - 600ea.",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982402662022668328/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '13',
    title: "Menu (Content) part 3 | Details(0.8/4/25)",
    content: "Turbo - 25k\nEngine - 10k\nTransmission - 10k\nBrakes - 5k",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982402662022668328/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '14',
    title: "Resprays are Free | Details: (1.5/4/25)",
    content: "RESPRAYS ARE FREE!",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982398364505243658/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "ffffff",
    date: new Date().toString()
  },
  {
    id: '15',
    title: "Music Warning | Details (2/4/25)",
    content: "MUSIC WARNING",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982403813036134400/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "d41717",
    date: new Date().toString()
  },
  {
    id: '16',
    title: "No Masks - Cash Only | Details (2/1/25)",
    content: "NO MASKS - CASH ONLY",
    image: "https://cdn.discordapp.com/attachments/982383757061402684/982404341199667240/unknown.png",
    checked: false,
    category: {
      title: "Signage",
      slug: "/",
      color: "3275f0",
    },
    hex: "d41717",
    date: new Date().toString()
  },
]
function TasksProvider({ children }: Props) {
  const initialTasks = defaultSignage

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (newTask: TaskProps) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const copyContent = (id: string) => {
    navigator.clipboard.writeText(tasks.find((task) => task.id == id)?.content || "")
  }

  const copyHex = (id: string) => {
    navigator.clipboard.writeText(tasks.find((task) => task.id == id)?.hex || "")
  }
  const updateCheckedStatus = (updatedTask: TaskProps, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...updatedTask, checked: checked };
        }
        return task;
      }),
    );
  };

  const updateLocalStorage = useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, copyContent, copyHex, updateCheckedStatus }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
