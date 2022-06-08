import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  height: 12rem;
  list-style: none;
  position: relative;
  background: #48d0b0;
  border-radius: 1.875rem;
  padding: 2.5rem 0.9rem 1.25rem 1.5rem
  box-shadow: 0 0 0.9rem -0.3rem #595959;
`;

export const Index = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.8;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
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

  img {
    width: 9rem;
    right: 0.5rem;
    bottom: 0.3rem;
    position: absolute;
  }
`;
