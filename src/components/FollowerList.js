import React from "react";
import Follower from "./Follower";
import styled from "styled-components";

const StyledList = styled.div`
    background-color:lightblue;
    #followers{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-evenly;
    }
`

const FollowersList = props => {
    const { followersArray } = props;
    console.log(followersArray);
    return (
        <StyledList>
            <h2>Followers List: </h2>
            <div id='followers'>
                {followersArray.map(follower => {
                    return <Follower follower={follower} key={ follower.id}/>
                })}
            </div>
        </StyledList>
    );
};

export default FollowersList;