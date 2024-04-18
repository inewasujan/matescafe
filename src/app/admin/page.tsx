
import SignOutButton from "@/components/SignOutButton";
import { getUser } from "@/lib/auth";
import LoginPage from "../login/page";


export default async function Home() {
  const user = await getUser();

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center">
          <p>User is logged in</p>

          <SignOutButton />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}