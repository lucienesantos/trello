import React, {Component} from 'react';
import { FaPlus } from "react-icons/fa";
import styled from 'styled-components'

const ColumnDiv = styled.div`
  width: 260px;
  height: 95px;
  background-color: #dfe3e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
  padding: 5px !important;
`;

const Header = styled.div`
  height: 60px;
  padding: 6px;
`;

const TitleColumn = styled.h2`
  padding-right: 68px;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 8px;
  font-weight: bold;
`;

const LinkAdd = styled.a`
  background-color: rgba(0,0,0,0);
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6b808c;
  padding: 5px !important;
`;

const SpanPlus = styled.span`
  top: 2px;
  right: 2px;
  position: relative;
`; 

export default class Column extends Component {

  render(){
    return (
      <ColumnDiv>
        <Header>
          <TitleColumn>Primeira coluna</TitleColumn>
        </Header>
        <LinkAdd>
          <span><SpanPlus><FaPlus /></SpanPlus>Adicionar um cartão</span>
        </LinkAdd>
      </ColumnDiv>
    )  
  }
}