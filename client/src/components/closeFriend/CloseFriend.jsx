import "./CloseFriend.scss"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_POLDER;
    return (
        <div>
            <li className="sidebarFriend">
                <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFirendName">{user.username}</span>
            </li>
        </div>
    )
}
