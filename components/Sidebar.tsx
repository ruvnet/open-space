import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <nav className={styles.sidebar}>
    <ul>
      <li><Link href="/tasks">Tasks</Link></li>
      <li><Link href="/plans">Plans</Link></li>
      <li><Link href="/editor">Code Editor</Link></li>
      <li><Link href="/terminal">Terminal</Link></li>
      <li><Link href="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
