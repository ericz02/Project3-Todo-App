// import Profile from "../../../pages/Profile"
import UserPage from "@/components/UserPage";
import { getUserBySlug } from "../../../utils/data";
const page = async ({ params: { slug } }) => {
  const { data, error } = await getUserBySlug(slug);
  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }
  const { user_id } = data;
  return (
    <div>
      <UserPage user_id={user_id} />
    </div>
  );
};

export default page;
