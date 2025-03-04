
import { useId, useState } from "react";
import { auth } from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function SignUp() {

  const id = useId();
  console.log(id);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        {console.log(user)}
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  return (

    <div className="flex flex-col w-full justify-center items-center gap-3">
    
      <input
      label="Email"
        id="id"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </button>

    </div>
  );
}

export default SignUp;