import styled from 'styled-components';
import bannerBackground from '../../assets/bannerbackground.jpeg';

export const BannerContainer = styled.section`
    background-image: url(${bannerBackground});
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    padding-bottom:600px;
    background-position: center center;
`;

