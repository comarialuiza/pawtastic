import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 100px;
    background-color: #F7EBEB;
    border-radius: 0 40px 40px 0;
    width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainTit = styled.h2`
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;
    color: #545870;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;

export const Button = styled.button`
    background-color: ${ props => props.fill ? '#545971' : 'transparent' };
    color: ${ props => props.fill ? '#fff' : '#545971' };
    border: 0;
    border-radius: 50px;
    border: 1px solid #545971;
    padding: 15px 50px;
    font-size: 12px;
    outline: 0;
    text-transform: uppercase;
`;