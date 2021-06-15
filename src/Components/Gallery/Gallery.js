import React from "react";
import styles from "./Gallery.module.css"

const Gallery = () =>{
    let arr = [];
    for(let i = 1; i<=9;i++)
    {
        arr.push({src: require(`../../Assets/Images/gallery${i}.jpg`), id: i});   
    }
    return (
        <div>
            <h1 className={styles.title}>Gallery</h1>
            <div className={styles.gallery}>
                {arr.map(img=>(
                    <img src={img.src} key={img.id}/>
                ))}
            </div>
        </div>
    )
}

export default Gallery