import styled from 'styled-components';
import pop from '../../assets/pop.jpeg';
import plant from '../../assets/plant.jpeg';
import plant2 from '../../assets/plant2.jpeg';

export const CoverFowllowUs = styled.div`
    background-image: url(${pop}), url(${plant}), url(${plant2});
    background-repeat: no-repeat;
    background-position: center center, top left, bottom right;
    background-size: cover, auto, auto;
    height: auto;
`;


export const ButtonGreen = styled.button`
    background-color:#97ae76;
    color: #fff;
    border: 2px solid #97ae76;
`;