import React, { useState } from "react";

import LoaderBtn from "../../components/LoaderBtn/LoaderBtn";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./login.css";
import { userService } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../components/Alert/Alert";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stateBtn, setStateBtn] = useState("Ingresar");
  const [alert, setAlert] = useState(undefined);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStateBtn(<LoaderBtn />);
    const response = await userService.signIn({ username, password });
    if (response.status === 200) {
      setStateBtn("Ingresar");
      navigate("/admin/home");
      setAlert({ msg: "Correcto", variant: "success" });
    } else {
      setAlert({ msg: "Error", variant: "error" });
    }
    setTimeout(() => {
      setAlert(undefined);
    }, 1000);
    console.log(username, password);
  };
  return (
    <>
      {alert && <CustomAlert alert={alert} />}
      <div className="container-login">
        <HeaderAdmin />
        <main className="login w-full pt-6">
          <Form
            className="container shadow p-4 rounded bg-white"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">Usuario</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su usuario..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="pass">Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="pass"
                name="pass"
                placeholder="Ingrese su contraseña..."
                required
              />
            </Form.Group>
            <Button className="btn-login" variant="success" type="submit">
              {stateBtn}
            </Button>
          </Form>
        </main>
      </div>
    </>
  );
};

export default Login;
