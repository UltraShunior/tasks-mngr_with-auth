import {
  Button,
  Card,
  Container,
  Input as InputCustom,
  Label,
} from "../components/ui";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { initTE, Input, Ripple } from "tw-elements";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    initTE({ Input, Ripple });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  //this function will be called when the form is submitted
  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);

    if (user) navigate("/tasks");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card className="px-7 py-4 justify-center flex flex-col bg-zinc-800 bg-opacity-[0.5] shadow-xl shadow-black/[0.26] backdrop-blur-[0.5rem] border border-neutral-700/25">
        {signupErrors &&
          signupErrors.map((err, i) => (
            <p key={i} className="bg-red-500 text-white p-2 text-center">
              {err}
            </p>
          ))}

        <div className="flex flex-row items-center justify-center">
          <h3 className="text-2xl font-bold">Register</h3>
        </div>
        <div className="mb-8 w-[12rem] m-auto border-t border-neutral-600"></div>

        <form onSubmit={onSubmit}>
          <Label for="exampleFormControlInput2" className="block">
            Tag Name
          </Label>
          <InputCustom
            className="mb-2 w-full border border-neutral-700/25 rounded-md p-2 bg-neutral-700/25 text-white placeholder-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-neutral-700/50 hover:border-transparent hover:ring-2 hover:ring-neutral-500/50 hover:text-white hover:placeholder-neutral-500/50"
            {...register("name", {
              required: true,
            })}
            id="name"
            placeholder="Enter your tag name"
          />

          {errors.name && <p className="text-red-500 mt-[-0.6rem] mb-[0.5rem]">name is required</p>}

          <Label for="email" className="block">
            Email
          </Label>
          <InputCustom
            type="email"
            className="mb-2 w-full border border-neutral-700/25 rounded-md p-2 bg-neutral-700/25 text-white placeholder-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-neutral-700/50 hover:border-transparent hover:ring-2 hover:ring-neutral-500/50 hover:text-white hover:placeholder-neutral-500/50"
            {...register("email", {
              required: true,
            })}
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 mt-[-0.6rem] mb-[0.5rem]">
              email is required
            </p>
          )}

          <Label htmlFor="password" className="block">
            Password
          </Label>
          <InputCustom
            type="password"
            className="mb-2 w-full border border-neutral-700/25 rounded-md p-2 bg-neutral-700/25 text-white placeholder-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-neutral-700/50 hover:border-transparent hover:ring-2 hover:ring-neutral-500/50 hover:text-white hover:placeholder-neutral-500/50"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500 mt-[-0.6rem] mb-[0.5rem]">
              password is required
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              className="inline-block mb-4 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Enter
            </Button>
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              You have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default RegisterPage;
