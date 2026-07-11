"use client";

import { useState } from "react";

export default function Planner() {
  const [tasks, setTasks] = useState([
    "Read Baddeley (1974)",
    "Summarise Stroop (1935)",
  ]);

  const [task, setTask] = useState("");

  function addTask() {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Study Planner 📅
      </h1>

      <input
        className="mt-6 w-full rounded border p-3"
        placeholder="Add a study task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={addTask}
        className="mt-4 rounded bg-black px-5 py-3 text-white"
      >
        Add Task
      </button>

      <div className="mt-8 space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="rounded border p-4"
          >
            ☐ {task}
          </div>
        ))}
      </div>
    </main>
  );
}