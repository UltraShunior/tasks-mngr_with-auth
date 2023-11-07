import { Card, Button } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <Card key={task.id} className="px-7 py-4 justify-center flex flex-col bg-zinc-800 bg-opacity-[0.5] shadow-xl shadow-black/[0.26] backdrop-blur-[0.5rem] border border-neutral-700/25">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 w-[6rem] rounded-md hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              deleteTask(task.id);
            }
          }}
        >
          <div className="flex items-center justify-center">
            <PiTrashSimpleLight className="text-white" />
            Eliminar
          </div>
        </Button>
      </div>
    </Card>
  );
}

export default TaskCard;
