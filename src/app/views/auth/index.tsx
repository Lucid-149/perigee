import { useAuth } from "../../config/hooks/useAuth";
import Migrate from "../../../data/migrations/data";
import { Page } from "../../model/app";
import { useState, lazy, Suspense, useEffect } from "react";
const CardComponent = lazy(
  () => import("../../../components/Layout/CardComponet")
);
import { createUserRequest } from "../../../data/api/auth";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../../components/Containers";
const Login = () => {
  const { login, user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      login(email, password);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardComponent
        title={`${user ? user.name : "Login"}`}
        state={{ type: error ? "error" : "info", state: "normal" }}
      >
        <>
          {user && (
            <div>
              <h4 className=" text-sky-500 text-xl font-bold italic">
                {user.email}
              </h4>
              {user.verified ? (
                <span>Verified</span>
              ) : (
                <span className=" text-red-600 font-bold uppercase text-xs">
                  Not Verified
                </span>
              )}
              <PrimaryBtn Type="primary" Text="Dashboard" LinkTo="/dashboard"/>
            </div>
          )}
          {user && <button onClick={logout}>Logout</button>}
          {!user && (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          )}
          {error && <p>{error}</p>}
        </>
      </CardComponent>
    </Suspense>
  );
};

const Register = () => {
  const { register } = useAuth();
  const [newUser, setNewUser] = useState<createUserRequest>({
    email: "",
    password: "",
    username: "",
    passwordConfirm: "",
    name: "",
    emailVisibility: true,
    role: "Client",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      register(newUser as createUserRequest);
    } catch (error) {
      setError(error as unknown as string);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={newUser?.email}
          placeholder="Email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          value={newUser?.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          value={newUser?.passwordConfirm}
          onChange={(e) =>
            setNewUser({ ...newUser, passwordConfirm: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Username"
          value={newUser?.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newUser?.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

const LoginPage: Page = {
  name: "Login",
  head: {
    title: "Login",
    description: "Login to your account",
    keywords: "login, account, kenakare",
  },
  url: "/login",
  protected: false,
  sections: [
    {
      index: 0,
      name: "login",
      component: <Login />,
    },
    {
      index: 1,
      name: "register",
      component: <Register />,
    },
  ],
  subPages: [],
};

export default LoginPage;
