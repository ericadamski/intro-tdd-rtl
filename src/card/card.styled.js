import styled from "styled-components";

export const Img = styled.img`
  max-width: 100%;
`;

export const Details = styled.div`
  position: absolute;
  background: white;
  bottom: 0;
  height: 30%;
  transition: all 0.2s ease;
  box-sizing: border-box;
  padding: 1rem;
`;

export const TitleGroup = styled.div`
  font-family: "Amatic SC", cursive;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  transition: all 0.3s ease;
`;

export const Location = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  transition: all 0.3s ease;
`;

export const Description = styled.p``;

export const Icon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  opacity: 0;
  transition: all 0.2s ease;
  transform: translateY(50%);

  ion-icon {
    font-size: 1.5rem;
  }
`;

// https://source.unsplash.com/500x500/?nature,water, city

export const Wrapper = styled.div`
  position: relative;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 40px 100px 0 rgba(0, 0, 0, 0.8);

    ${Details} {
      height: 60%;
    }

    ${Icon} {
      opacity: 1;
      transform: translateY(0);
    }

    ${Location} {
      height: 0;
      opacity: 0;
    }

    ${Title} {
      font-size: 1.5rem;
    }
  }
`;
