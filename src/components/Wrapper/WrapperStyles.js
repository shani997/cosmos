import styled from 'styled-components';
import { starsBackground } from './starsBackground';

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.black};
    overflow: hidden;
  

    box-sizing: border-box;
      margin: 0 auto;
      padding: 0;
      max-width: 1600px;
   

    &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 2px;
        top: -2px;
        background: white;
        box-shadow: ${starsBackground};
        border-radius: 100px;
    }
`;

export const Global = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.black};
    overflow: hidden;

  
   

   
`;
