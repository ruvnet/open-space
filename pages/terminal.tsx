import dynamic from 'next/dynamic';
import styles from '../styles/Terminal.module.css';

const XTerm = dynamic(() => import('react-xterm'), { ssr: false });

const Terminal = () => (
  <div className={styles.container}>
    <h1>Terminal</h1>
    <XTerm />
  </div>
);

export default Terminal;
