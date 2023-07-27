import styled, { css } from 'styled-components'

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  background-color: #f6f5f5;
  z-index: 99999;
  padding: 10px
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #f6f5f5;
  text-align: left;
  margin-top: 60px;
  padding-top: 30px;
  padding-left: 80px;
  padding-right: 80px;
  border-top: 1px solid #000
`;


export const Loader = styled.div`
  background-color: red;
  width: 40px;
  height: 40px;

  ${(props) => props.$isLoading && css`background-color: yellow;`}
  ${(props) => props.$isSuccess && css`background-color: green;`}
`;


export const ProductsList = styled.section`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-evenly;
   width: 100%;
   max-width: 1280px;
   margin: 4rem auto;
   gap: 32px;
`;

export const RandomProductsStyle = styled.section`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-evenly;
   width: 80%;
   margin: 4rem auto;
   gap: 64px;
`;