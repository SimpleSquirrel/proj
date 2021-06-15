import React from "react";
import styles from "./Post.module.css";
import data from "../../../../MOCK_DATA.json"

const Post = () => {
    const array = window.location.href.split("/")
    const id = array[array.length - 1]
    return (
        <div className={styles.wrapper}>
                <div className={styles.post} key={data[id].id}>
                    <img src={data[id].image} alt=""/>
                    <h4 className={styles.title}>{data[id].title}</h4>
                    <ul className={styles.list}>
                        <li className={styles.element}>Platform: {data[id].platform}</li>
                        <li className={styles.element}>Studio: {data[id].studio}</li>
                        <li className={styles.element}>Genre: {data[id].genre}</li>
                    </ul>
                    <p className={styles.description}>{data[id].description}</p>
                </div>
        </div>
    )
}

export default Post;