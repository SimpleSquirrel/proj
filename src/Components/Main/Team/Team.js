import React from "react";
import styles from "./Team.module.css"
import portrait1 from "../../../Assets/Images/team-portrait1.jpg"
import portrait2 from "../../../Assets/Images/team-portrait2.jpg"
import portrait3 from "../../../Assets/Images/team-portrait3.jpg"
import portrait4 from "../../../Assets/Images/team-portrait4.jpg"
import portrait5 from "../../../Assets/Images/team-portrait5.jpg"


const Team = () =>{
  return (
      <div className={styles.content}>
          <h1 className={styles.title}>Our team</h1>
          <div className={styles.teamWrapper}>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait1} alt=""/>
                  <h5 className={styles.name}>Meru the Succubus</h5>
                  <p className={styles.role}>Human resources</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait2} alt=""/>
                  <h5 className={styles.name}>Homo-Homo Zek</h5>
                  <p className={styles.role}>Right hand</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait3} alt=""/>
                  <h5 className={styles.name}>Zla sadra pony aka Gulko</h5>
                  <p className={styles.role}>Dungeon Master</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait4} alt=""/>
                  <h5 className={styles.name}>Megumin</h5>
                  <p className={styles.role}>Security</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait5} alt=""/>
                  <h5 className={styles.name}>Misato Katsuragi</h5>
                  <p className={styles.role}>Enemy destroyer</p>
              </div>
          </div>
      </div>
  )
};

export default Team;