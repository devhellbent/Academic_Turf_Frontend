import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ChangePassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {    
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/resetpassword/${token}`,
        {
          newPassword,
          confirmPassword,
        }
      );
      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error changing password.");
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex min-h-[100vh] flex-col items-center justify-center bg-background px-4 py-12">
        <div className="rounded-lg border bg-card w-full max-w-md">
          <div className="p-6">
            <h3 className="text-2xl font-semibold">Change Password</h3>
            <p className="text-sm text-muted-foreground">
              Enter your new password and confirm it.
            </p>
          </div>
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                id="newPassword"
                placeholder="Enter new password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                id="confirmPassword"
                placeholder="Confirm new password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-black rounded text-white h-10 px-4 py-2 w-full"
              type="submit"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
