import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="my-4">Welcome, {user.name}!</p>
      <p className="my-4">Email: {user.email}</p>
      <p className="my-4">User create at: {user.created_at.slice(0,10)}</p>
    </>
  );
}

export default ProfilePage;
