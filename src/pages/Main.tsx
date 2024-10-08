import React from "react";
import { IoIosSearch, IoIosAdd } from "react-icons/io";
import Button from '@mui/material/Button';

const Main = () => {
    const [activeMenu, setActiveMenu] = React.useState("All");

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

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
                    <div className="notepad_top_area">
                        <h3 className="notepad_top_title">Note Pad</h3>
                        <div className="notepad_nav_area">
                            <nav>
                                <ul>
                                    {["All", "About", "Services", "Contact"].map((menu) => (
                                        <li
                                            key={menu}
                                            className={activeMenu === menu ? "active" : ""}
                                            onClick={() => handleMenuClick(menu)}
                                        >
                                            {menu}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="notepad_main_area"></div>
                </div>
            </div>
        </>
    );
}

export default Main;