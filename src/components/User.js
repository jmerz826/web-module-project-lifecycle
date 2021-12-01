import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
    display:flex;
    img{
        width:300px;
        border-top: 3px solid black;
        border-bottom: 3px solid black;

    }
    div{
        display:flex;
        flex-direction:column;
        margin-left:1%;
        text-transform:uppercase;
    }
    div h2{
        font-size:3rem;
        text-decoration:underline;
        margin-bottom:0;
    }
    h4{
        margin-top:1%;
    }
    h3{
        margin-top:0;
    }

`

const User = props => {
    const { avatar, name, username, repos, followerCount } = props;
    return (
        <StyledUser>
            <img src={avatar} />
            <div>
                <h2>{name}</h2>
                <h4>({username})</h4>
                <h3>Total Repos: {repos}</h3>
                <h3>Total Followers: { followerCount}</h3>
            </div>
        </StyledUser>
    );
};

export default User;