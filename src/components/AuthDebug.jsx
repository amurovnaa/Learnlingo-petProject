import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../redux/auth/operations";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
} from "../redux/auth/selectors";

const AuthDebugPanel = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [displayName, setDisplayName] = useState("John Doe");

  const handleRegister = () => {
    dispatch(registerUser({ email, password, displayName }))
      .unwrap()
      .then((res) => console.log("Register resolved:", res))
      .catch((err) => console.log("Register rejected:", err));
  };

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((res) => console.log("Login resolved:", res))
      .catch((err) => console.log("Login rejected:", err));
  };

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => console.log("Logout successful"))
      .catch((err) => console.log("Logout rejected:", err));
  };

  const handleRefresh = () => {
    dispatch(getCurrentUser())
      .unwrap()
      .then((res) => console.log("Refresh resolved:", res))
      .catch((err) => console.log("Refresh rejected:", err));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Auth Debug Panel</h3>

      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleRefresh}>Refresh User</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Redux State:</strong>
        <pre>
          {JSON.stringify({ user, isLoggedIn, isRefreshing, error }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default AuthDebugPanel;
