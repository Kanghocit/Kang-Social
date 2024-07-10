import "./CloseFriend.scss"

export default function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFirendName">{user.username}</span>
            </li>
        </div>
    )
}
