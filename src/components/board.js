import React, {Component} from "react";
import FormNewColumn from "./FormNewColumn";
import Column from "./Column";
import styled from "styled-components";

import {connect} from "react-redux";

const Div = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
`;

class Board extends Component {
  state = {
    colums: []
  };

  loadColums = () => {
    return this.props.columns.map(element => {
      return (
        <Column
          id={element.id}
          title={element.title}
          key={element.id}
          cards={element.cards}
        />
      );
    });
  };

  render() {
    return (
      <div className="flex-row">
        <Div> {this.props.columns ? this.loadColums() : null} </Div>{" "}
        <div>
          <FormNewColumn />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  columns: state.columnsManager.columns
});

export default connect(mapStatetoProps)(Board);
