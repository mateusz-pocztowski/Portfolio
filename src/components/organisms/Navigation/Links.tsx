import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { NavigationContext } from 'contexts/NavigationContext';

interface Props {
  big?: boolean;
}

interface ItemProps {
  readonly isActive: boolean;
  readonly big: boolean;
}

const ListItem = styled.li<ItemProps>`
  position: relative;
  margin-left: 35px;
  font-weight: ${({ theme }) => theme.medium};
  &:hover {
    color: ${({ theme }) => theme.blue100};
    &:after {
      transform: scaleX(1);
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.blue100};
    transition: 0.3s;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.blue100};
      &:after {
        transform: scaleX(1);
      }
    `}
  ${({ big, isActive }) =>
    big &&
    css`
      margin: 20px 0;
      color: ${({ theme }) => theme.white};
      font-size: ${({ theme }) => theme.fontSize.xl};
      &:hover {
        color: ${({ theme }) => theme.white};
      }
      &:after {
        transform: ${isActive ? 'scaleX(1)' : 'scaleX(0.3)'};
        bottom: -10px;
        width: 100px;
        height: 4px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.white};
      }
      ${({ theme }) => theme.mq.s} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        &:after {
          width: 150px;
        }
      }
    `}
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
`;

const Links = ({ big }: Props) => {
  const { activeLink } = useContext(NavigationContext);

  return (
    <>
      <ListItem big={big || false} isActive={activeLink === 'home'}>
        <StyledLink to="#home">Home</StyledLink>
      </ListItem>
      <ListItem big={big || false} isActive={activeLink === 'technologies'}>
        <StyledLink to="#technologies">Technologies</StyledLink>
      </ListItem>
      <ListItem big={big || false} isActive={activeLink === 'portfolio'}>
        <StyledLink to="#portfolio">Portfolio</StyledLink>
      </ListItem>
      <ListItem big={big || false} isActive={activeLink === 'contact'}>
        <StyledLink to="#contact">Contact</StyledLink>
      </ListItem>
    </>
  );
};

export default Links;