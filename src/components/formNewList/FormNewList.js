import React, { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import styled from 'styled-components'

//Style
const Form = styled.form`
  width: 330px;
`;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputListName = styled.input`
  padding: 5px;
  border-radius: 4px;
  width: 250px;
  font-size: 14px;
`;

const ButtonSave = styled.button`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
`;

const LinkAdd = styled.a`
  border-radius: 3px;
  padding: 15px;
  color: #fff;
  background-color: transparent;
  line-height: 20px;
  background-color: rgba(0,0,0,.24);
  color: hsla(0,0%,100%,.8);
  transition: color 85ms ease-in;
  font-weight: 500;
`;

const SpanPlus = styled.span`
  top: 2px;
  right: 2px;
  position: relative;
`;

export default class FormNewList extends Component {

  state = { active: false, newNameList: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.newNameList); // TOdo dispatch a action addNew Column
  }

  handleClickAdd = () => {
    this.setState({active: true})
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        { this.state.active ? (
        <DivFlexRow>
          <InputListName 
            type="text" 
            name="name" 
            placeholder="Insira o título da lista..." 
            autoComplete="off" dir="auto" 
            maxLength="512"
            onChange={event => this.setState({newNameList: event.target.value})}/>

          <ButtonSave onClick={(event) => this.handleSubmit(event)}>Salvar</ButtonSave>
        </DivFlexRow>
        ):(
          <LinkAdd onClick={this.handleClickAdd}>
            <span><SpanPlus><FaPlus /></SpanPlus>Adicionar nova lista</span>
          </LinkAdd>
        )
      }
      </Form>
    )
  }
}


