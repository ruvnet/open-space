import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import dynamic from 'next/dynamic';
import styles from '../styles/Editor.module.css';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });
const socket = io();

const Editor = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on('codeUpdate', (newCode) => {
      setCode(newCode);
    });

    return () => {
      socket.off('codeUpdate');
    };
  }, []);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit('updateCode', newCode);
  };

  return (
    <div className={styles.container}>
      <h1>Code Editor</h1>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
        options={{ selectOnLineNumbers: true }}
      />
    </div>
  );
};

export default Editor;
