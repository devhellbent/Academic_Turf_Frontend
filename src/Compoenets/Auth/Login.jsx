import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Importing toast for notifications

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Store all data in a single object
        const userData = {
          userid: data.id,
          token: data.accessToken,
          email: data.email,
          name: data.name,
          role: data.role,
          profilePicture: data.profilePicture,
        };

        // Store the object as a string in localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
        toast.success("Login successful!"); // Success toast
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed"); // Error toast
      }
    } catch (err) {
      setError("Something went wrong, please try again later");
      toast.error("Something went wrong, please try again later"); // Error toast for catch block
    }
  };

  return (
    <div>
      <div className="flex flex-col mt-[50px] mb-10">
        <main>
          <section className="flex items-center justify-center p-6 md:p-10">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">
                  Enter your email and password to sign in.
                </p>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    id="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Sign In
                </button>
                <div
                  onClick={() => navigate("/forgot-password")}
                  className="text-end hover:text-blue-600 font-bold cursor-pointer text-sm"
                >
                  Forgot Password?
                </div>
              </form>
              <div className="text-center flex items-center justify-center">
                Don&apos;t have an Account? &nbsp;
                <div
                  className="hover:text-blue-600 cursor-pointer font-bold"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </div>
              </div>
              <div className="flex items-center justify-center">
                <hr />
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-background text-nowrap">
                    Or continue with
                  </span>
                </div>
                <hr />
              </div>
              <div className="grid gap-4">
                <button className="whitespace-nowrap shadow bg-white rounded-md text-md font-seminold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-gray-100 hover:text-accent-foreground h-10 px-4 py-2 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="28px"
                    height="28px"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Login;
