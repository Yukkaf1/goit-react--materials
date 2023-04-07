import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;

  padding: 8px;
`;

export const ColorPickerTitle = styled.h2`
  text-align: center;
  padding: 20px 0;
  background-color: white;
  text-transform: uppercase;
`;

export const ColorSection = styled.section`
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  };
`;

export const ColorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  max-width: 60px;
  flex-direction: column;
  color: white;
  background-color: darkblue;
  border: 1px solid white;
`;

export const ColorLabel = styled.span`
  margin-bottom: 5px;
`;

export const ColorButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  cursor: pointer;

  transition: transform 250 ms lineal;

  &:active {
    transform: scale(1.1);
  }
`;
