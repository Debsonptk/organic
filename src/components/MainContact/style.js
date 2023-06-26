import styled from "styled-components";
import bannerContact from "../../assets/bannerblogdetail.jpeg";

export const BannerContact = styled.div`
	background-image: url(${bannerContact});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: center center;
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