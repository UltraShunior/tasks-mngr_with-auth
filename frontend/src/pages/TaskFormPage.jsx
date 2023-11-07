import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, updateTask, loadTask, errors: tasksErrors } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let task;

    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data)
    }

    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card className="px-7 py-4 justify-center flex flex-col bg-zinc-800 bg-opacity-[0.5] shadow-xl shadow-black/[0.26] backdrop-blur-[0.5rem] border border-neutral-700/25">
        {tasksErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title" className="block">Title:</Label>
          <Input
            type="text"
            placeholder="Title"
            className="mb-2 w-full border border-neutral-700/25 rounded-md p-2 bg-neutral-700/25 text-white placeholder-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-neutral-700/50 hover:border-transparent hover:ring-2 hover:ring-neutral-500/50 hover:text-white hover:placeholder-neutral-500/50" 
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}

          <Label htmlFor="description" className="block">Description</Label>
          <Textarea
            className="mb-2 w-full border border-neutral-700/25 rounded-md p-2 bg-neutral-700/25 text-white placeholder-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-neutral-700/50 hover:border-transparent hover:ring-2 hover:ring-neutral-500/50 hover:text-white hover:placeholder-neutral-500/50"
            placeholder="Description"
            rows={3}
            {...register("description")}
          ></Textarea>

          <Button>{params.id ? "Edit Task" : "Create Task"}</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
