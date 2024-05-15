import React from "react";
import InputBlitz from "../InputBlitz";
import styles from "./DynamicInput.module.css";
import DescriptionInput from "../DescriptionInput";

interface IDynamicInputProps {
  className?: string;
  children?: React.ReactNode;
  inputDescription?: string;
}

export const DynamicInput: React.FC<IDynamicInputProps> = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.input_description}>
        <p>{props.inputDescription ?? "Type a description..."}</p>
        {props.children}
      </div>
      <InputBlitz />
    </div>
  );
};
