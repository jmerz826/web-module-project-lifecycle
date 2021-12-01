import React from "react";
import styled from "styled-components";

const StyledFollower = styled.div`
    margin: 0 1%;
    img{
        width:200px;
    }
    text-decoration:underline;
    text-align:center;
    h3{
        margin-top:0;
    }
`

const Follower = props => {
    const { follower } = props;
    return (
        <StyledFollower>
            <img src={follower.avatar_url} />
            <h3>{follower.login }</h3>
        </StyledFollower>
    );
};

export default Follower;