import styled from "styled-components";

export const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  margin: 5rem;
`;

export const Item = styled.li``;

export const Search = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 1rem;

  &::after {
    content: "Search";
    font-family: "Amatic SC", cursive;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 25px;
    font-size: 1.25rem;
    background: white;
    transform: translateY(-55%);
    transition: all 0.2s ease;
  }

  &:focus-within {
    &::after {
      font-size: 1rem;
      transform: translateY(30%);
    }
  }
`;
