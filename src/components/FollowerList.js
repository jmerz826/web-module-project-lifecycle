import React from "react";
import Follower from "./Follower";



const FollowersList = props => {
    const { followersArray } = props;
    console.log(followersArray);
    return (
        <div>
            <h2>Followers List: </h2>
            <div id='followers'>
                {followersArray.map(follower => {
                    return <Follower follower={follower} key={ follower.id}/>
                })}
            </div>
        </div>
    );
};

export default FollowersList;