import React, { useState } from 'react'
import { About } from './About/about'  // should remove
import { MenuBar } from './MenuBar/menuBar'
import { pages } from './pages'

// react components start with a capital letter
export const App = () => {

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const handleChangePage = (id) => {
        if(id < 0 || id >= pages.length) {
            return;
        } else {
            setCurrentPage(pages[id]);
        }
    }

    return (
        <>
            <MenuBar pages={pages} onClick={handleChangePage}/>
            {currentPage.component}
        </>
    )
}
