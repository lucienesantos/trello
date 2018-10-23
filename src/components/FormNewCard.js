import React, {Component} from "react";
import styled from "styled-components";
import {FaPlus} from "react-icons/fa";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {newCard} from "../actions";
import * as Util from "../utils";

const LinkAdd = styled.a`
  background-color: rgba(0, 0, 0, 0);
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6b808c;
  padding: 5px;
  padding-top: 0;
`;

const SpanPlus = styled.span`
  top: 2px;
  right: 2px;
  position: relative;
`;

const TextAreaCardName = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  background: none;
  height: auto;
  max-height: 162px;
  min-height: 58px;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  padding: 5px 7px;
  color: #17394d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  position: relative;
  z-index: 0;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
`;

const Div = styled.div`
  overflow: hidden;
  padding: 3px 3px 3px;
  position: relative;
  z-index: 10;
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

class FormNewCard extends Component {
  state = {active: false, newNameCard: ""};

  showForm = () => {
    this.setState({active: true});
  };

  handleSubmit = event => {
    if (!Util.empty(this.state.newNameCard)) {
      var card = {
        name: this.state.newNameCard,
        columnTitle: this.props.columnTitle
      };
      this.props.newCard(card); // Dispatch a action newCard
      this.setState({newNameCard: ""});
    }
  };

  render() {
    return (
      <form>
        {this.state.active ? (
          <Div>
            <TextAreaCardName
              type="text"
              placeholder="Insira um título para este cartão..."
              value={this.state.newNameCard}
              onChange={event =>
                this.setState({newNameCard: event.target.value})
              }
            />
            <ButtonSave
              type="button"
              onClick={event => this.handleSubmit(event)}>
              Adicionar Cartão
            </ButtonSave>
          </Div>
        ) : (
          <LinkAdd onClick={this.showForm}>
            <span>
              <SpanPlus>
                <FaPlus />
              </SpanPlus>
              Adicionar um cartão
            </span>
          </LinkAdd>
        )}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({newCard}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(FormNewCard);
