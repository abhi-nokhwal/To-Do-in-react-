import { useEffect, useState } from "react";

function App() {
  const [tasks, settasks] = useState([
    "Eat the breakfast",
    "Take shower",
    "Work On Your MERN stack Project",
  ]);
  const [Newtask, setnewtask] = useState("");

  const handleinputchange = (e) => {
    setnewtask(e.target.value);
  };

  const Addtask = () => {
    if (Newtask.trim() === "") return;
    settasks((t) => [...t, Newtask]);
    setnewtask("");
  };

  const deletetask = (index) => {
    settasks(tasks.filter((p, i) => i !== index));
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <h1 className="text-4xl text-center mt-5 font-bold "> TO DO LIST</h1>
      <div className="center flex mt-5 justify-center">
        <input
          className="w-2xl p-2 h-7 center border rounded"
          type="text"
          value={Newtask}
          placeholder="Enter Your Task"
          onChange={(e) => handleinputchange(e)}
        />
        <button
          type="submit"
          className="rounded bg-green-700 border mx-3 w-25"
          onClick={Addtask}>
          ADD
        </button>
      </div>
      <div className="  flex justify-center mt-10">
        <ol className="rounded min-w-3xl">
          {tasks.map((task, index) => (
            <li className=" mt-2 flex justify-between border" key={index}>
              <span className=" p-2">{task}</span>

              <button
                className="p-2  rounded bg-red-700 text-white"
                onClick={() => deletetask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
