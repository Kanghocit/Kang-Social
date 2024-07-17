import "./Profile.scss"
import Topbar from "../../components/topbar/Topbars";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_POLDER;
    return (
        <div>
            <>
                <Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                                <img className="profileUserImg" src={`${PF}person/12.jpg`} alt="" />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">An Khang</h4>
                                <span className="profileInfoDesc">Phắc du</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed username="khang"/>
                            <Rightbar profile/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
