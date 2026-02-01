import React from 'react';
import styles from './Experience.module.css';
import resume from '../../data/resumeData';
import { motion } from 'framer-motion';

export default function Experience(){
  return (
    <motion.section id="experience" className="section"
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <h2>Work Experience</h2>
      {resume.experience.map( ( job, i ) => (
        <motion.article key={i} className={styles.job}
          whileHover={{ y:-4 }}
          transition={{ type:'spring', stiffness:200 }}>
          <div className={styles.meta}>
            <div className={styles.role}>{job.role}</div>
            <div>•</div>
            <div>{job.company}</div>
            <div>•</div>
            <div>{job.dates}</div>
          </div>
          <div className={styles.desc}>{job.description}</div>
        </motion.article>
      ) )}
    </motion.section>
  );
}
