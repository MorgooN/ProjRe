import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth); // automatically update user state varibale when logged in
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width="100" height="100" />
        <button onClick={signUserOut}>Logout</button>
      </div>
    </div>
  );
};
