import Share from "../share/Share";
import "./Feed.scss";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = username 
                ? await axios.get("/posts/profile/" + username) 
                : await axios.get("/posts/timeline/66890a466372e1c52144e777");
                setPosts(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            }
        };
        fetchPosts();
    }, [username]);

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {error ? (
                    <div className="error">Failed to load posts: {error}</div>
                ) : (
                    posts.map((p) => (
                        <Post key={p._id} post={p} />
                    ))
                )}
            </div>
        </div>
    );
}
