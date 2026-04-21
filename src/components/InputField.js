import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/globalStyles";

export default function InputField(props) {
  return <TextInput style={styles.input} {...props} />;
}
