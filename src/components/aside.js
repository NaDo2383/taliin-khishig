import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/aside.css";

export default function Aside() {
    return (
        <div>
            <aside>
                <div id="asideHeader">
                    <img
                        src={require("../assets/pic/logo1.png")}
                        alt=""
                        id="headerLogo"
                    />
                    <div id="headerTitle">TALIIN KHISHIG MINING</div>
                </div>
                <div id="categories">
                    {/* <div>Хянах самбар</div> */}
                    <Link
                        to="/"
                        class="asideTitles"
                        id="LinkToDashBoard"
                        onclick="catTitle1"
                    >
                        <img
                            src={require("../assets/icons/news.png")}
                            alt=""
                            class="asideTitleIcon"
                        />
                        <div class="AsideTitleNames">News</div>
                    </Link>
                    <Link
                        to="/news"
                        class="asideTitles"
                        id="LinkToDashBoard"
                        onclick="catTitle1"
                    >
                        <img
                            src={require("../assets/icons/project.png")}
                            alt=""
                            class="asideTitleIcon"
                        />
                        <div class="AsideTitleNames">Project</div>
                    </Link>
                    <Link
                        to="/project"
                        class="asideTitles"
                        id="LinkToDashBoard"
                        onclick="catTitle1"
                    >
                        <img
                            src={require("../assets/icons/users.png")}
                            alt=""
                            class="asideTitleIcon"
                        />
                        <div class="AsideTitleNames">Project</div>
                    </Link>
                    <Link
                        to="/users"
                        class="asideTitles"
                        id="LinkToDashBoard"
                        onclick="catTitle1"
                    >
                        <img
                            src={require("../assets/icons/users.png")}
                            alt=""
                            class="asideTitleIcon"
                        />
                        <div class="AsideTitleNames">Users</div>
                    </Link>
                </div>
            </aside>
        </div>
    );
}
