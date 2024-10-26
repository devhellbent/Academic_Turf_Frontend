import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [newUserData, setNewUserData] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages
    setSuccessMessage(""); // Clear previous success messages

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          name,
          email,
          password,
          role,
        }
      );

      // setSuccessMessage("User registered successfully! Redirecting to sign-in...");
      toast.success("Registration successful!"); // Toast success message

      navigate("/signin");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setErrorMessage(errorMsg); // Set the error message state
      toast.error(errorMsg); // Display error as toast notification
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
          toast.success("Google Signup successful!");
        }
      } else {
        setError(data.message || "Google Signup failed");
        toast.error(data.message || "Google Signup failed");
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
      <section className="flex mt-10 items-center justify-center p-6 md:p-10 bg-muted">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-muted-foreground">
              Create an account to get started.
            </p>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {/* {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )} */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                type="email"
                id="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  className="block appearance-none w-full bg-white border text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="service-provider">Service Provider</option>
                  <option value="student-client">Student Client</option>
                </select>
              </div>
            </div>

            <button
              className="inline-flex items-center justify-center bg-black text-white font-bold hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center flex items-center justify-center">
            Have an Account? &nbsp;
            <div
              className="hover:text-blue-600 cursor-pointer font-bold"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
                text="signup" // This changes the button text to "Sign up with Google"
                width="300" // Increase button width if needed
              />
            </div>
            {isNewUser && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                  <h3 className="text-xl font-bold mb-4">
                    Welcome! Please select your role
                  </h3>
                  <p className="mb-4">
                    As a new user, we need to know what type of account you'd
                    like to create.
                  </p>
                  <select
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Select your role</option>
                    <option value="Student Client">Student Client</option>
                    <option value="Service Provider">Service Provider</option>
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
    </div>
  );
}

export default Register;
