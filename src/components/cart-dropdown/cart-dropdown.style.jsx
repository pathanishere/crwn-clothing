import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButon,
  InvertedButton,
} from "../button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButon}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;