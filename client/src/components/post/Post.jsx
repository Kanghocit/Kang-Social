import { MoreVert } from '@mui/icons-material'
import './Post.scss';
import axios from 'axios';
import {format} from 'timeago.js'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUSer] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_POLDER;
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users/${post.userId}`);
                setUSer(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            }
        };
        fetchUser();
    }, [post.userId]);




    const likeHandler = () => {
        setLike(isLike? like-1 : like+1)
        setIsLike(!isLike )
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className='postProfileImg' src={user.profilePicture + PF+"person/noAvatar.png"} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className='' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className='likeIcon' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
