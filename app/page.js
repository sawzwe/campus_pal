import Landing from "/app/client/Landing/page.jsx";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route.jsx";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Landing />
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
