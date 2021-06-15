import React, {useState} from "react";
import data from "../../MOCK_DATA.json"
import Posts from "./Posts/Posts";
import Pagination from "./Pagination/Pagination";
import styles from "./Projects.module.css"
import Menu from "./Menu/Menu";
import SearchResults from "react-filter-search";

const Projects = () =>{
    const [posts, setPosts] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [tags, setTags] = useState(
        [...new Set(data.map(x => x.ageCategory))].concat(
        [...new Set(data.map(x => x.season))]).concat(
        [...new Set(data.map(x => x.genre))])
    )
    const [value, setValue] = useState("");

    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const filter = (x) => {
        let temp;
        if(tags.includes(x.name)){
            temp = tags.filter(el => el !== x.name);
            setTags(tags.filter(el => el !== x.name));
        }
        else{
            temp = tags.concat([x.name]);
            setTags(tags.concat([x.name]));
        }
        setPosts(data.filter(el => temp.includes(el.season) && temp.includes(el.ageCategory) && temp.includes(el.genre)));
    }

    const paginate = (pageNumber) => {
        window.scroll(0, 0);
        setCurrentPage(pageNumber);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Projects</h1>
            <input placeholder="Search info..." className={styles.search} type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
            <Menu data={data} filter={filter}/>
            <div className={value.length > 0 ? styles.invisible : styles.visible}>
                <Posts data={currentPosts}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
            </div>
            <SearchResults value={value} data={posts}
            renderResults={results => (
                <div className={value.length > 0 ? styles.visible : styles.invisible}>
                    <Posts data={results}/>
                </div>
                )}>
            </SearchResults>
        </div>
    )
}

export default Projects