import React from "react"
import {Link} from "gatsby"
import {normalizePath} from "../utils/normalize-path";


const ContentTypePagination = ({previousPage, nextPage, contentType}) => {
    console.log({previousPage, nextPage})
    return (
        <nav className="pagination-single section-inner" aria-label={contentType} role="navigation">

            <hr className="styled-separator is-style-wide" aria-hidden="true"/>

            <div className="pagination-single-inner">

                {
                    previousPage &&
                    <Link className="previous-post" to={normalizePath(previousPage.uri)}>
                        <span className="arrow" aria-hidden="true">←</span>
                        <span className="title"><span className="title-inner">{previousPage.title}</span></span>
                    </Link>
                }

                {
                    nextPage &&

                    <Link className="next-post" to={normalizePath(nextPage.uri)}>
                        <span className="arrow" aria-hidden="true">→</span>
                        <span className="title"><span className="title-inner">{nextPage.title}</span></span>
                    </Link>
                }

            </div>

            <hr className="styled-separator is-style-wide" aria-hidden="true"/>

        </nav>
    );
};


export default ContentTypePagination;
