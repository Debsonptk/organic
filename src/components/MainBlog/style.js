import styled from "styled-components";
import bannerBlog from "../../assets/bannerblog.jpeg";

export const BannerBlog = styled.div`
	background-image: url(${bannerBlog});
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
