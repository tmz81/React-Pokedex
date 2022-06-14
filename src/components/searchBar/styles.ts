import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  
  input {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1.25rem;
    outline: none;
    opacity: 0.8;
  }

  button {
    width: 100%;
    padding: 0.4rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1.25rem;
    background-color: #ccc;
    color: #000;
    outline: none;
    opacity: 0.8;
  }

  button:hover {
    background-color: #ccc9;
  }
`;