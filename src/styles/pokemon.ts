import styled from "styled-components";
import pokeball from "/bg-pokeball.svg";

export const Container = styled.li`
  width: 100%;
  height: 12rem;
  list-style: none;
  position: relative;
  background: #48d0b0;
  border-radius: 1.875rem;
  background-size: cover;
  background-image: url(${pokeball});
  padding: 2.5rem 0.9rem 1.25rem 1.5rem
  box-shadow: 0 0 0.9rem -0.3rem #595959;
`;

export const Index = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.8;
  margin-right: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;

  h3 {
    font-size: 1.5rem;
    transform: translateY(0.9rem);
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  li {
    color: #fff;
    font-size: 1.25rem;
    font-weight: bolder;
    text-align: center;
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0.5rem;
    background-color: #61e0c9;
    list-style-type: none;
  }

  div {
    width: 100%;
    background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(0.5rem);
  }
`;
