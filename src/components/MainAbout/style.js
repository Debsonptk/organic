import styled from "styled-components";
import bannerAbout from "../../assets/banneraboutus.jpeg";

export const BannerAboutUs = styled.div`
	background-image: url(${bannerAbout});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const Title = styled.h2`
    position: relative;
    &::after{
        content: "";
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        top: 50px;
        width: 100px;
        height: 3px;
        display: inline-block;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }`;