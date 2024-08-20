import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto bg-black"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {/* Nombre */}
            <div>
              <Label htmlFor="name">Nombre</Label>
              <div className="mt-2">
                <Input
                  placeholder="Nombre"
                  id="name"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                />
              </div>
            </div>
            {/* LastName */}
            <div>
              <Label htmlFor="lastname">Apellidos</Label>
              <div className="mt-2">
                <Input
                  placeholder="LastName"
                  id="lasname"
                  name="lastname"
                  type="lastname"
                  required
                  autoComplete="lastname"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <Label htmlFor="emailaddress">Email address</Label>
              <div className="mt-2">
                <Input
                  placeholder="correo@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <Label>Hola world</Label>
              <div className="mt-2">
                <Input placeholder="Tira todo"></Input>
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {/* Forgot PassWord */}
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  placeholder="*******"
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                />
              </div>
            </div>
            {/* Boton */}
            <Button>
              Sign in
              </Button>            
              {/* <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button> */}            
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
