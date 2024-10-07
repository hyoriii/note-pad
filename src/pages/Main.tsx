import React from "react";
import { IoIosSearch, IoIosAdd } from "react-icons/io";
import Button from '@mui/material/Button';

const Main = () => {
    return (
        <>
            <div className="top_nav">
                <div className="search_box">
                    <IoIosSearch />
                    <input type="text" className="search_input" placeholder="검색어를 입력하세요." />
                </div>
                <div>
                    <Button variant="contained" aria-label="favorite"><IoIosAdd /> add</Button>
                </div>
            </div>
            <div className="main">
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div>
                <div className="notepad_area">

                </div>
            </div>
        </>
    );
}

export default Main;