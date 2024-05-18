import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestion";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1",
      likes: 12,
      timestamp: "2d",
    },

    {
      user: "jing_fang2",
      postImage:
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
      likes: 82,
      timestamp: "12h",
    },

    {
      user: "catlover_",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06OotE25ZO-hYpeBM6nFyA_iwn0fJ4D69s_Di04ULhw&s",
      likes: 120,
      timestamp: "29 minutes",
    },
    {
      user: "catlover2_",
      postImage:
        "https://plus.unsplash.com/premium_photo-1681843747290-252c8095ee11?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8fDA%3D",
      likes: 120,
      timestamp: "3h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
