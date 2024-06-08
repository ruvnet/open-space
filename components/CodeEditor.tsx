import React, { useState } from 'react';
import { MonacoEditor } from 'react-monaco-editor';
import styles from '../styles/CodeEditor.module.css';

const CodeEditor = () => {
  const [code, setCode] = useState('// type your code here');

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  return (
    <div className={styles.codeEditor}>
      <MonacoEditor
        width="100%"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
        }}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
