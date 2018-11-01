import React, {Component} from "react";
import FormNewColumn from "./FormNewColumn";
import Column from "./Column";
import styled from "styled-components";
import {DragDropContext} from "react-beautiful-dnd";

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

  onDragEnd = result => {
    //TODO reorder new column
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="flex-row">
          <Div> {this.props.columns ? this.loadColums() : null} </Div>{" "}
          {/* <Column
            id={1}
            title="First column"
            key="2"
            cards={[
              {
                id: 1,
                name: "First litter card 1.1"
              },
              {
                id: 2,
                name: "First litter card 1.2"
              }
            ]}
          /> */}
          <div>
            <FormNewColumn />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStatetoProps = state => ({
  columns: state.columnsManager.columns
});

export default connect(mapStatetoProps)(Board);
