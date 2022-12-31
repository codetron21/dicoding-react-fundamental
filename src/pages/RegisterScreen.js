import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "react-loading-indicators";
import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";
import { register } from "../utils/network-data";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [isButtonHover, setIsButtonHover] = useState(false);

  useEffect(() => {
    setButtonEnabled(!loading);
  }, [loading, buttonEnabled]);

  const onHandleChangeName = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  };

  const onHandleChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const onHandleChangePassword = (e) => {
    const inputPass = e.target.value;
    setPassword(inputPass);
  };

  const onHandleChangeConfirmPassword = (e) => {
    const inputPass = e.target.value;
    setConfirmPassword(inputPass);
  };

  const onRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Kolom masukan tidak boleh kosong");
      return;
    }

    if (password !== confirmPassword) {
      alert("Konfirmasi password harus sama dengan password");
      return;
    }

    setLoading(true);
    const { error } = await register({ name, email, password });
    setLoading(false);
    if (error) {
      return;
    }

    alert("Berhasil membuat akun!");
    navigate("/login");
  };

  return (
    <div style={Styles["form-container"]}>
      <LabelNote label="Register" />
      <Spacer v={20} />
      {loading && (
        <CircularProgress
          style={Styles.loader}
          size="small"
          color="cornflowerblue"
        />
      )}
      <input
        type="text"
        style={Styles["form-input"]}
        placeholder="Name"
        value={name}
        onChange={onHandleChangeName}
      />
      <Spacer v={10} />
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
      <input
        type="password"
        style={Styles["form-input"]}
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={onHandleChangeConfirmPassword}
      />
      <Spacer v={10} />
      <button
        style={Styles["button-large"](buttonEnabled, isButtonHover)}
        type="button"
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
        onClick={onRegister}
      >
        Register
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

export default RegisterScreen;
