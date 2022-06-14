import styled, {css} from "styled-components";
import pokeball from "/bg-pokeball.svg";

interface HeaderProps {
  nameLength: number;
}

interface SectionProps {
  sprite: string;
}

export const Container = styled.li`
  width: 100%;
  height: 15rem;
  list-style: none;
  border-radius: 1.875rem;
  box-shadow: 0 0 0.9rem -0.3rem #f1f1f1;
  
  background-image: url(${pokeball});
  background-position: bottom right;
  background-size: 48%;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
  padding: 2.5rem 0.9rem 1.50rem 1.5rem;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: translate(0, -0.5rem);
  }

  &.bug-type {
    background-color: #66bb6a;
    li {
      background-color: #81c784;
    }
  }
  &.fire-type {
    background-color: #fc6c6d;
    li {
      background-color: #fc7e7e;
    }
  }
  &.grass-type {
    background-color: #48d0b0;
    li {
      background-color: #61e0c9;
    }
  }
  &.normal-type {
    background-color: #90a4ae;
    li {
      background-color: #b0bec5;
    }
  }
  &.water-type {
    background-color: #76befe;
    li {
      background-color: #8fd1fd;
    }
  }
`;

export const Index = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.8;
  margin-right: 1rem;
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;

  h3 {
    ${props =>
      props.nameLength > 12 && css`
        font-size: 1.5rem;
      `
    }
  }
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  padding-bottom: 20px;
  height: 95%;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    border-radius: 20px;
    list-style-type: none;
    color: #fff;
    font-size: 15px;
    font-weight: bolder;
    text-align: center;
    padding: 8px 25px;
    margin-bottom: 5px;
    transform: translateY(15px);
  }

  div#pokemon_image {
    ${props => 
      props.sprite && css`
      background-image: url(${props.sprite});
    `}

    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-0.5rem);
  }
`;
