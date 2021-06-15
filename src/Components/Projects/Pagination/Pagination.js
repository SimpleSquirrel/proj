import React from "react"
import styles from "./Pagination.module.css"

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => paginate(1)}>⋘</button>
            <button className={styles.button} onClick={() => {
                if (currentPage !== 1){
                    paginate(currentPage - 1);
                }
            }}>🡰</button>
            {pageNumbers.map(number => {
                if (number === currentPage){
                    return <button className={`${styles.button} ${styles.active}`} onClick={() => paginate(number)}>{number}</button>
                }
                else{
                    return <button className={styles.button} onClick={() => paginate(number)}>{number}</button>
                }
                }
            )}
            <button className={styles.button} onClick={() => {
                if (currentPage !== Math.ceil(totalPosts / postsPerPage)){
                    paginate(currentPage + 1)
                }
            }}>🡲</button>
            <button className={styles.button} onClick={() => paginate(Math.ceil(totalPosts / postsPerPage))}>⋙</button>
        </div>
    )
}

export default Pagination