import React from "react";
import './Home.scss'
import Topbar from "../../components/topbar/Topbars";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


class Home extends React.Component {
    render() {
        return (
            <>
                <Topbar />
                <div className="homeContainer">
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </div>
            </>
        )
    }
}

export default Home;