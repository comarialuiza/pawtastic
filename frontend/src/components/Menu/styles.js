import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 100px;
    background-color: #545971;
    width: 28%;
    border-radius: 40px 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .saveAndExit {
        color: #fff;
        font-weight: 300;
    }
`;

export const Logo = styled.h1`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 16px;
    color: #F7EBEB;
`;

export const FormMenu = styled.ul``;

export const FormMenuItem = styled.li`
    padding: 10px 0;
    color: #F7EBEB;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 14px;
    
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }

    &:last-of-type {
        .formMenuSelect {
            &:after {
                display: none;
            }
        }
    }

    .formMenuSelect {
        height: 15px;
        width: 15px;
        display: block;
        background: #9597A6;
        border-radius: 50%;
        margin-right: 10px;
        position: relative;

        &:after {
            content: '';
            height: 65px;
            width: 1px;
            background-color: #9597A6;
            display: block;
            position: absolute;
            top: 35px;
            left: 7.1px;
            transform: translateY(-50%);
        }
    }
`;