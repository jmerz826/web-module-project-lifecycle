import React from "react";
import Follower from "./Follower";



const FollowersList = props => {
    const { followersArray } = props;
    console.log(followersArray);
    return (
        <div>
            <h1>Followers List: </h1>
            <div id='followers'>
                {followersArray.map(follower => {
                    return <Follower follower={follower} />
                })}
            </div>
        </div>
    );
};

export default FollowersList;