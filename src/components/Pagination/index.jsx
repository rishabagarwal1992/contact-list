import { useEffect, useState } from "react";
import './index.scss';
const Pagination = (props) => {
    const { list, pageLength, updateCurrentPage, viewPage } = props;
    const [pages, setPages] = useState([]);
    useEffect(() => {
        let maxPages = calculateMaxPages();
        let pages_update = Array(maxPages).fill('');
        pages_update[viewPage] = 'active';
        setPages(pages_update);
    }, [list]);

    const updatePage = (pageNum) => {
        let maxPages = calculateMaxPages();
        let updated_pages = Array(maxPages).fill('');
        updated_pages[pageNum] = 'active';
        setPages(updated_pages);
        updateCurrentPage(pageNum);
    }
    const calculateMaxPages = () => {
        return Math.ceil(list.length / pageLength);
    }

    return (
        <ul className="pagination-list">
            {pages && pages.map((page, idx) => {
                return <li key={idx} onClick={(e) => { e.stopPropagation(); updatePage(idx) }} className={`${page === "active" ? 'active-page' : ''}`}>{idx + 1}</li>
            })}
        </ul>
    )
}
export default Pagination;