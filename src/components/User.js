import React from "react";

const User = props => {
    const { avatar, name, username, repos, followerCount } = props;
    return (
        <div id='user-card'>
          <img src={avatar} />
          <h2>{name}</h2>
          <h3>{username}</h3>
          <h3>Total Repos: {repos}</h3>
          <h3>Total Followers: { followerCount}</h3>
        </div>
    );
};

export default User;