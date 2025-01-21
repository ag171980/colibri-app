import React from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ alert }) => {
  return (
    <Alert key={alert.variant} variant={alert.variant}>
      {alert.msg}
    </Alert>
  );
};

export default CustomAlert;
