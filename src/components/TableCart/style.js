import styled from 'styled-components'

export const BigTable = styled.table`

input{
    border-radius: 25px;
    border: 1px solid #97ae76;
    font-size: 14px;
    text-align: center;
    line-height: 46px;
    align-self: center;


    &:focus{
        outline: none;
    }
}
`


export const SmallTable = styled.table`

.product{
    font-family: playfair display,serif;
    font-size: 18px;
    font-weight: 400;
}

input{

    border-radius: 25px;
    border: 1px solid #97ae76;
    font-size: 14px;
    text-align: center;
    line-height: 46px;
    align-self: center;
    width: 60px;
    height: 28px;

    &:focus{
        outline: none;
    }
}
th{

text-align:start;
}

td{

    text-align:end;
}
`
export const ImageSize = styled.img`
    width:100px;
    height:auto;
`;

export const TheadColor = styled.tr`
.color{
    background-color:#d2ffea;
}
`;

export const BtnSmStyle = styled.div`
.whitebtn{
    border-radius: 25px;
    border: 2px solid #97ae76;
    font-size: 14px;
    align-self: center;
    background-color:transparent;
    color:#97ae76;
}

.greenbtn{
    border-radius: 25px;
    border: 2px solid #97ae76;
    font-size: 14px;
    align-self: center;
    background-color:#97ae76;
    color:white;
}
`;

