import React from 'react';
import styles from './Contact.module.css';
import resume from '../../data/resumeData';
import { motion } from 'framer-motion';

export default function Contact(){
  const { contact } = resume;
  return (
    <motion.section id="contact" className="section"
      initial={{ opacity:0, y:8 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <h2>Contact</h2>
      <div className={styles.container}>
        <div className={styles.links}>
          <a className={styles.btn} href={`mailto:${contact.email}`}>Email</a>
          <a className={styles.btn} href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={styles.btn} href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </motion.section>
  );
}
