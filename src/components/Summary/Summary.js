import React from 'react';
import styles from './Summary.module.css';
import resume from '../../data/resumeData';
import { motion } from 'framer-motion';

export default function Summary(){
  return (
    <motion.section id="summary" className="section"
      initial={{ opacity:0, y:8 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <div className={styles.container}>
        <h2>Summary</h2>
        <p className={styles.text}>{resume.summary}</p>
      </div>
    </motion.section>
  );
}
