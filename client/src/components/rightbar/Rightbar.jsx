import "./Rightbar.scss"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_POLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="./assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Fan</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/rabbit.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}

                </ul>
            </>
        )
    };
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">HaNoi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">VietNam</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">RelationShip:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt="" />
                        <span className="rightbarFollowingName">HungThao</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
                        <span className="rightbarFollowingName">HungThao</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt="" />
                        <span className="rightbarFollowingName">HungThao</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar/>}
            </div>
        </div>
    )
}