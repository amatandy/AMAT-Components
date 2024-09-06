import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const Buttons = () => {
  return (
    <div className="buttons">
      <div className="button-wrapper">
        <div className="div">
          <Button className="button-instance" hover="default" size="small" />
          <Button className="button-instance" hover="default" size="medium" />
          <Button className="button-instance" hover="default" size="large" />
          <Button className="button-instance" hover="yes" size="small" />
          <Button className="button-instance" hover="yes" size="medium" />
          <Button className="button-instance" hover="yes" size="large" />
        </div>
      </div>
    </div>
  );
};
