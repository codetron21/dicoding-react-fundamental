import React, { useContext, useState, useEffect } from "react";
import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";
import { CircularProgress } from "react-loading-indicators";
import { login } from "../utils/network-data";
import TokenContext from "../contexts/TokenContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [isButtonHover, setIsButtonHover] = useState(false);
  const tokenContext = useContext(TokenContext);

  useEffect(() => {
    setButtonEnabled(!loading);
  }, [loading, buttonEnabled]);

  const onHandleChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const onHandleChangePassword = (e) => {
    const inputPass = e.target.value;
    setPassword(inputPass);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Kolom masukan tidak boleh kosong");
      return;
    }

    setLoading(true);
    const { error, data } = await login({ email, password });
    setLoading(false);
    if (error) {
      return;
    }

    tokenContext.saveToken(data.accessToken);
  };

  return (
    <div style={Styles["form-container"]}>
      <LabelNote label="Login" />
      <Spacer v={20} />
      {loading && (
        <CircularProgress
          style={Styles.loader}
          size="small"
          color="cornflowerblue"
        />
      )}
      <input
        type="email"
        style={Styles["form-input"]}
        placeholder="Email"
        value={email}
        onChange={onHandleChangeEmail}
      />
      <Spacer v={10} />
      <input
        type="password"
        style={Styles["form-input"]}
        placeholder="Password"
        value={password}
        onChange={onHandleChangePassword}
      />
      <Spacer v={10} />
      <button
        style={Styles["button-large"](buttonEnabled, isButtonHover)}
        type="button"
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
};

const Styles = {
  loader: {
    padding: "10px",
  },
  "form-container": {
    margin: "auto",
    textAlign: "center",
    width: "30%",
  },
  "form-input": {
    width: "100%",
    padding: "8px",
    border: "1px solid cornflowerblue",
    borderRadius: "10px",
  },
  "button-large": (isEnabled, isHover) => {
    return {
      fontWeight: "bold",
      color: "white",
      backgroundColor: isEnabled ? "cornflowerblue" : "grey",
      border: "0px",
      width: "100%",
      padding: "8px",
      borderRadius: "10px",
      boxShadow: `0px 0px 
      ${isEnabled && isHover ? "5px" : "0px"} cornflowerblue`,
    };
  },
};

export default LoginScreen;
