import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">User</Link>{" "}
      {/* we use this instead of anchor tag because when we navigate from anchor it reload the full page which is not quite right, but this link tag only reload the section which we want to navigate through instead of reloading full page*/}
    </main>
  );
}
