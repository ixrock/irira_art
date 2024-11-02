"use client";

import styles from './dialog.module.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps extends React.PropsWithChildren<{}> {
  onClose?: () => void;
}

export function Dialog({ children, onClose }: DialogProps) {
  const [domReady, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const onEscapeKey = ({ code }: KeyboardEvent) => code === "Escape" && onClose?.();
    document.addEventListener("keyup", onEscapeKey);
    return () => document.removeEventListener("keyup", onEscapeKey);
  }, []);

  const dialog = (
    <div className={styles.Dialog}>
      <div className={styles.DialogContent}>
        <span className={styles.closeBtn} onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );

  return domReady ? createPortal(dialog, document.body) : null;
}
