import { useState } from 'react';
import styles from '../styles/Plans.module.css';

const Plans = () => {
  const [spec, setSpec] = useState("");
  const [plan, setPlan] = useState("");

  return (
    <div className={styles.container}>
      <h1>Plans</h1>
      <textarea value={spec} onChange={(e) => setSpec(e.target.value)} placeholder="Specification" />
      <textarea value={plan} onChange={(e) => setPlan(e.target.value)} placeholder="Proposed Plan" />
    </div>
  );
};

export default Plans;
