import Image from "next/image";
import Profile from "./Profile";
import SideBar from "./Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="m-auto">
      <SideBar/>
      </div>
      <Profile/>
    </main>
  );
}
