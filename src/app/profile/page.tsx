import { api } from "~/trpc/server";

const Profile = async () => {
  const data = await api.user.currentUser();
  return <div>{JSON.stringify(data.postsData)}</div>;
};

export default Profile;
