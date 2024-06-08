import React, { useState } from 'react';
import styles from '../styles/PlanEditor.module.css';

const PlanEditor = () => {
  const [plan, setPlan] = useState('');

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  return (
    <div className={styles.planEditor}>
      <h2>Edit Plan</h2>
      <textarea
        value={plan}
        onChange={handlePlanChange}
        placeholder="Edit your plan here..."
      />
    </div>
  );
};

export default PlanEditor;
