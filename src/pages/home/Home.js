import React from "react";
import './Home.scss'
import Topbar from "../../components/topbar/Topbars";
import Sidebar from "../../components/sidebar/Sidebar";


class Home extends React.Component {
    render() {
        return (
            <>
            
            <Topbar />
            <Sidebar/>
            </>
        )
    }
}

export default Home;