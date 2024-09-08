import { api } from "~/trpc/server";

const Profile = async () => {
  const data = await api.user.currentUser();
  return <div>{JSON.stringify(data)}</div>;
};

export default Profile;
