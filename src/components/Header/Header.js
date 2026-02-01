import React from 'react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import resume from '../../data/resumeData';

// Header shows name, title and simple section links
export default function Header(){
  const { header } = resume;
  return (
    <motion.header className={styles.header}
      initial={{ opacity:0, y:-10 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.6 }}>
      <div className={styles.titleBlock}>
        <div className={styles.name}>{header.name}</div>
        <div className={styles.role}>{header.title}</div>
      </div>
      <nav className={styles.nav}>
        <a href="#summary">Summary</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
}
