import React from "react";
import { useSelector } from "react-redux";
 const DetailPage = () => {
    const {post} = useSelector((state) => state.detail);

    return(
        <div>
                    <div key={post.userId}>
                        <h3>{post.body}</h3>
                    </div>
                    
            
        </div>
    )
 }

 export default DetailPage;