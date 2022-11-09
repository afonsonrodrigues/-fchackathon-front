import styled from "styled-components";

export const TrackWrapper = styled.div`
    height: 27.8rem;
    width: 38.4rem;
    padding: 6rem 0 2rem 0;
    border-radius: 1.6rem;
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    cursor: pointer;
`;

export const ArrowDown = styled.img`
    height: 2rem;
    width: 2rem;
    &:hover{
        transform: scale(1.3);
    }
`;

export const TrackName = styled.h2`
    font-size: 1.6rem;
    color: var(--primary-color-900);
`;