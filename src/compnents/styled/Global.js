import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const Flex = styled.div`
display:flex;
justify-content:center;
align-items:center;

`;


const GlobalStyles = createGlobalStyle `
*{
   margin:0; 
   box-sizing: border-box; 
   color: #fff;
}
body{
    background: #191919;
    padding: 2em;
}
a {
    text-decoration: none;
}
h1{
    font-family: 'Martel', serif;
    color: #fff;
    font-size: 10em;
    font-weight: bold;
    text-transform: uppercase;
}
p{
    font-family: 'Chivo', sans-serif;
    font-size: 13px;
}
@media only screen and (max-width: 600px) {
   body{
       padding:0.5em;
   } 
   h1 {
     font-size: 2em;
   }
   
 }
`;

export default GlobalStyles;