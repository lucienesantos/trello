import React, {Component} from "react";
import styled from "styled-components";
import {TitleColumnNormal, TextareaEdit} from "./core";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editCard} from "../actions";
import * as Util from "../utils";

const Li = styled.li`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  color: #17394d;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  white-space: normal;
`;

class Card extends Component {
  state = {editing: false, name: this.props.name};

  handleClick = () => {
    this.setState({editing: true});
  };

  handleChangeTitle = e => {
    this.setState({name: e.target.value});
  };

  saveName = () => {
    this.setState({editing: false});
    if (!Util.empty(this.state.name)) {
      var cardEditing = {
        id: this.props.id,
        name: this.state.name,
        column_id: this.props.column_id
      };
      this.props.editCard(cardEditing);
    }
  };

  render() {
    return (
      <Li key={this.props.name}>
        {this.state.editing ? (
          <TextareaEdit
            value={this.state.name}
            onChange={e => this.handleChangeTitle(e)}
            onBlur={this.saveName}
          />
        ) : (
          <TitleColumnNormal onClick={this.handleClick}>
            <p>{this.props.name}</p>
          </TitleColumnNormal>
        )}
      </Li>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({editCard}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Card);
