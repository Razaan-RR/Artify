import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      <div className="flex flex-col items-center gap-6">
        {/* User Image */}
        <img
          src={user?.photoURL || "https://i.ibb.co/4YQ0t6J/default-user.png"}
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
        />

        {/* User Name */}
        <div className="w-full">
          <h2 className="text-lg font-semibold">Name</h2>
          <p className="text-gray-700">{user?.displayName || "Not Set"}</p>
        </div>

        {/* User Email */}
        <div className="w-full">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-gray-700">{user?.email}</p>
        </div>

        {/* Update Profile Button */}
        <button className="btn btn-primary mt-4 w-full sm:w-1/2">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
