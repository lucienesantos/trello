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
    colums: {}
  };

  // a little function to help us with reordering the result
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    console.log(result);
    return result;
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

  getList = id => {
    var cards = [];
    this.props.columns.forEach(el => {
      if (el.id.toString() === id) {
        cards = el.cards;
      }
    });

    return cards;
  };

  onDragEnd = result => {
    const {source, destination} = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const test = this.getList(source.droppableId);
      console.log(test);
      const items = this.reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      let state = {items};

      if (source.droppableId === "2") {
        state = {selected: items};
      }

      this.setState(state);
    } else {
      const newValues = this.move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.refreshColumns(newValues, source, destination);
    }
  };

  refreshColumns = (newValues, source, destination) => {
    const columns = this.props.columns.reduce((acc, column) => {
      if (column.id.toString() === source.droppableId) {
        column.cards = newValues[source.droppableId];
      } else if (column.id.toString() === destination.droppableId) {
        column.cards = newValues[destination.droppableId];
      }
      acc.push(column);
      return acc;
    }, []);

    this.setState({columns: columns});
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="flex-row">
          <Div> {this.props.columns ? this.loadColums() : null} </Div>{" "}
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
