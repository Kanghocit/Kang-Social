import { MoreVert } from '@mui/icons-material'
import './Post.scss'

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/12.jpg" alt="" />
                        <span className="postUsername">An Khang</span>
                        <span className="postDate">5 phút trước</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className=''/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Nothing!!!</span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like.png" alt="" />
                        <img className='likeIcon' src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">100 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
