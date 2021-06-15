import React, {useState} from "react";
import styles from "./Menu.module.css"

const Menu = ({data, filter}) => {
    const [ageCategory] = useState([...new Set(data.map(item => item.ageCategory))]);
    const [season] = useState([...new Set(data.map(item => item.season))]);
    const [genres] = useState([...new Set(data.map(item => item.genre))]);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Platforms</h3>
                {ageCategory.map(item => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "ageCategory", name: item})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{item}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h3 className={styles.title}>Studios</h3>
                {season.map(item => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "season", name: item})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{item}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h3 className={styles.title}>Genres</h3>
                {genres.map(item => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "genre", name: item})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{item}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;