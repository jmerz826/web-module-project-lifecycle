import React from "react";
import styled from "styled-components";

const StyledFollower = styled.div`
    margin: 0 1%;
    width: 10%;
    img{
        width:100%;
    }
    text-decoration:underline;
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