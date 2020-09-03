import React, { useCallback, useState } from "react";
import {TextInput, PrimaryButton} from  "../components/Uikit";
import {signUp} from "../reducks/users/operations";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback((event) => {
    setUsername(event.target.value)
  }, [setUsername]);
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);
  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword]);
  const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
  }, [setConfirmPassword]);

  return (
    <div className="form">
      <h2>Create your acount</h2>
      <TextInput 
        fullWidth={true}
        label={"User name"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
      <TextInput 
        fullWidth={true}
        label={"Email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput 
        fullWidth={true}
        label={"Passord"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput 
        fullWidth={true}
        label={"Confirm password"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />
      <div className="module-spacer--small" />
      <div>
        <PrimaryButton 
          label={"SIGNUP"}
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
      </div>
      <div className="module-spacer--small" />
      {/* <p onClick={() => dispatch(push("/signin"))}>Click here if you have an account</p> */}
    </div>
  )
}

export default SignUp