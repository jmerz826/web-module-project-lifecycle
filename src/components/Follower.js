import React from "react";

const Follower = props => {
    const { follower } = props;
    return (
        <div id='follower-card'>
            <img src={follower.avatar_url} />
            <h3>{follower.login }</h3>
        </div>
    );
};

export default Follower;