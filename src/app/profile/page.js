import Link from "next/link";
import { getUser } from "../data/users";
import EditProfileClient from "../components/EditUser";
import { editProfile } from "../actions/editProfile";

export default function ProfilePage() {
  const User = getUser();
  return <EditProfileClient User={User} editProfile={editProfile} />;
}
