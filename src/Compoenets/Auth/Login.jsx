import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [newUserData, setNewUserData] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
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
        const userData = {
          userid: data.id,
          token: data.accessToken,
          email: data.email,
          name: data.name,
          role: data.role,
          profilePicture: data.profilePicture,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
        toast.success("Login successful!");
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong, please try again later");
      toast.error("Something went wrong, please try again later");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/google-login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credential: credentialResponse.credential }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        if (data.isNewUser) {
          setIsNewUser(true);
          setNewUserData(data);
        } else {
          const userData = {
            userid: data.id,
            token: data.accessToken,
            email: data.email,
            name: data.name,
            role: data.role,
            profilePicture: data.profilePicture,
          };

          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/dashboard");
          toast.success("Google login successful!");
        }
      } else {
        setError(data.message || "Google login failed");
        toast.error(data.message || "Google login failed");
      }
    } catch (err) {
      setError("Something went wrong, please try again later");
      toast.error("Something went wrong, please try again later");
    }
  };

  const handleRoleSelection = async () => {
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/complete-google-signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: newUserData.email,
            name: newUserData.name,
            profilePicture: newUserData.profilePicture,
            role: selectedRole,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        const userData = {
          userid: data.id,
          token: data.accessToken,
          email: data.email,
          name: data.name,
          role: data.role,
          profilePicture: data.profilePicture,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
        toast.success("Signup successful!");
      } else {
        setError(data.message || "Signup failed");
        toast.error(data.message || "Signup failed");
      }
    } catch (err) {
      setError("Something went wrong, please try again later");
      toast.error("Something went wrong, please try again later");
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
              <div className="flex justify-center gap-4">
                {/* <button
                 
                  className="whitespace-nowrap shadow bg-white rounded-md text-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-gray-100 hover:text-accent-foreground h-10 px-4 py-2 flex items-center justify-center gap-2"
                >
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
                </button> */}
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                  {isNewUser && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                      <h3 className="text-xl font-bold mb-4">
                        Welcome! Please select your role
                      </h3>
                      <p className="mb-4">
                        As a new user, we need to know what type of account
                        you'd like to create.
                      </p>
                      <select
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                      >
                        <option value="">Select your role</option>
                        <option value="Student Client">Student Client</option>
                        <option value="Service Provider">
                          Service Provider
                        </option>
                      </select>
                      <button
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        onClick={handleRoleSelection}
                      >
                        Complete Signup
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Login;
