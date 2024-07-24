import "./Profile.scss"
import Topbar from "../../components/topbar/Topbars";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_POLDER;
    const [user, setUSer] = useState({});
    const [error, setError] = useState(null);
    const username = useParams().username;
    



    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users?username=${username}`);
                setUSer(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            }
        };
        fetchUser();
    }, []);
    return (
        <div>
            <>
                <Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" src={user.coverPicture || PF + "person/noCover.png"} alt="" />
                                <img className="profileUserImg" src={user.profilePicture || PF + "person/noAvatar.png"} alt="" />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{user.username}</h4>
                                <span className="profileInfoDesc">{user.desc}</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed username = {username}/>
                            <Rightbar user = {user}/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
