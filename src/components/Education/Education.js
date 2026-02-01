import React from 'react';
import styles from './Education.module.css';
import resume from '../../data/resumeData';
import { motion } from 'framer-motion';

export default function Education(){
  return (
    <motion.section id="education" className="section"
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <h2>Education</h2>
      {resume.education.map( ( ed,i )=> (
        <div className={styles.item} key={i}>
          <div className={styles.meta}><strong>{ed.school}</strong> — {ed.degree}</div>
          <div className={styles.meta}>{ed.dates}</div>
        </div>
      ) )}
    </motion.section>
  );
}
