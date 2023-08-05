import styles from "../styles/InputGroup.module.css";

export default function InputGroup({ children }) {
  return <div className={`${styles.group}`}>{ children }</div>;
}
