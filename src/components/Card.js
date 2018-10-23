import React, { Component } from "react";
import styled from "styled-components";

const Li = styled.li`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  cursor: pointer;
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

export default class Card extends Component {
  render() {
    return <Li key={this.props.name}>{this.props.name}</Li>;
  }
}
