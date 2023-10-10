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
    <Container
      className="h-[calc(100vh-10rem)] flex items-center justify-center"
    >
      
      <Card className="bg-opacity-[0.5]" >
        {signupErrors &&
          signupErrors.map((err, i) => (
            <p key={i} className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}

        <div className="flex flex-row items-center justify-center">
          <h3 className="text-2xl font-bold">Register</h3>
        </div>
        <div className="mb-8 w-[12rem] m-auto border-t border-neutral-600"></div>

        <form onSubmit={onSubmit}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <InputCustom
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              {...register("name", {
                required: true,
              })}
              id="name"
              placeholder="Enter your tag name"
            />

            <Label
              for="exampleFormControlInput2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Tag Name
            </Label>
          </div>
          {errors.name && <p className="text-red-500">name is required</p>}

          <div className="relative mb-6" data-te-input-wrapper-init>
            <InputCustom
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              {...register("email", {
                required: true,
              })}
              id="email"
              placeholder="Email"
            />

            <Label
              for="email"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Email
            </Label>
          </div>
          {errors.email && <p className="text-red-500 mt-[-1.5rem] mb-[1.5rem]">email is required</p>}

          <div className="relative mb-6" data-te-input-wrapper-init>
            <InputCustom
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
            <Label
              htmlFor="password"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Password
            </Label>
          </div>
          {errors.password && (
            <p className="text-red-500 mt-[-1.5rem] mb-[1.5rem]">password is required</p>
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
