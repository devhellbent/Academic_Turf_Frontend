import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submit is clicked
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, {
        email,
      });
      toast.success(response.data.message); // Show success toast
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong"); // Show error toast
    } finally {
      setLoading(false); // Remove loading state after request is complete
    }
  };

  return (
    <div className="flex items-center my-[200px] lg:px-3 px-7 justify-center">
      <div className="">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Forgot Password
          </h1>
          <p className="mt-2 text-muted-foreground">
            Enter your email to receive a password reset link.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
              id="email"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-black text-white h-10 rounded px-4 py-2 w-full flex items-center justify-center"
            type="submit"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send Reset Link"} {/* Conditionally render text */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
