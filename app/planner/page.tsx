"use client";

import { useEffect, useState } from "react";

export default function PlannerPage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
  const savedTasks = localStorage.getItem("planner-tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

function addTask() {
  if (task.trim() === "") return;

  const updatedTasks = [
    ...tasks,
    task
  ];

  setTasks(updatedTasks);

  localStorage.setItem(
    "planner-tasks",
    JSON.stringify(updatedTasks)
  );

  setTask("");
}

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        📅 Study Planner
      </h1>

      <p className="mt-3 text-gray-600">
        Organise your psychology study tasks.
      </p>


      <div className="mt-8 flex gap-3">

        <input
          className="rounded border p-3 flex-1"
          placeholder="Add a study task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={addTask}
          className="rounded bg-black px-5 text-white"
        >
          Add
        </button>

      </div>


      <div className="mt-8 space-y-3">

        {tasks.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border p-4"
          >
            ☐ {item}
          </div>
        ))}

      </div>

    </main>
  );
}