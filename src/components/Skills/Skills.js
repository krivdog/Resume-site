import React from 'react';
import styles from './Skills.module.css';
import resume from '../../data/resumeData';
import { motion } from 'framer-motion';

function Chip( { children } ){
  return <div className={styles.chip}>{children}</div>;
}

export default function Skills(){
  const { skills } = resume;
  return (
    <motion.section id="skills" className="section"
      initial={{ opacity:0, y:8 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <h2>Skills</h2>
      <div className={styles.group}>
        <h3>Languages</h3>
        <div className={styles.grid}>{skills.languages.map( ( l,i )=>( <Chip key={i}>{l}</Chip> ) )}</div>
      </div>
      <div className={styles.group}>
        <h3>Frameworks</h3>
        <div className={styles.grid}>{skills.frameworks.map( ( l,i )=>( <Chip key={i}>{l}</Chip> ) )}</div>
      </div>
      <div className={styles.group}>
        <h3>Tools</h3>
        <div className={styles.grid}>{skills.tools.map( ( l,i )=>( <Chip key={i}>{l}</Chip> ) )}</div>
      </div>
    </motion.section>
  );
}
