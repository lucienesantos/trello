import React, {Component} from "react";
import {FaPlus} from "react-icons/fa";
import styled from "styled-components";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {newColumn} from "../actions";

//Style
const Form = styled.form`
  width: 271px;
`;

const DivInnerForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dfe3e6;
  height: 78px;
  justify-content: space-between;
  border-radius: 3px;
  min-height: 32px;
  padding: 5px;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
`;

const InputListName = styled.input`
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 4px;
  background: #fff;
  border: 1px solid #5ba4cf;
  box-shadow: 0 0 0 1px #5ba4cf;
  display: block;
  margin: 0;
  transition: margin 85ms ease-in, background 85ms ease-in;
  color: #17394d;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
`;

const ButtonSave = styled.button`
  color: #fff;
  background-color: #5aac44;
  box-shadow: 0 1px 0 0 #3f6f21;
  border: none;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 1px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
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
  border-radius: 4px;
  width: 130px;
`;

const LinkAdd = styled.a`
  border-radius: 3px;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 110px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.24);
  color: hsla(0, 0%, 100%, 0.8);
  font-weight: 500;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;

const SpanPlus = styled.span`
  top: 2px;
  right: 2px;
  position: relative;
`;

const Span = styled.span`
  font-size: 14px;
`;

class FormNewColumn extends Component {
  state = {active: false, newNameList: "", column_name: ""};

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.newNameList);
    this.props.newColumn(this.state.newNameList); // Dispatch a action anewColum
    this.setState({newNameList: ""});
  };

  handleClickAdd = () => {
    this.setState({active: true});
  };

  render() {
    return (
      <Form>
        {this.state.active ? (
          <DivInnerForm>
            <InputListName
              type="text"
              name="name"
              placeholder="Insira o título da lista..."
              value={this.state.newNameList}
              onChange={event =>
                this.setState({newNameList: event.target.value})
              }
            />

            <ButtonSave onClick={event => this.handleSubmit(event)}>
              Adicionar Lista
            </ButtonSave>
          </DivInnerForm>
        ) : (
          <LinkAdd onClick={this.handleClickAdd}>
            <Span>
              <SpanPlus>
                <FaPlus />
              </SpanPlus>
              Adicionar outra lista
            </Span>
          </LinkAdd>
        )}
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({newColumn}, dispatch); // Dispatch a action (newColum é o nome da action action/index.js)

export default connect(
  null,
  mapDispatchToProps
)(FormNewColumn);
