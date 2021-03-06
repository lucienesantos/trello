import React, {Component} from "react";
import Card from "./Card";
import FormNewCard from "./FormNewCard";
import {ColumnDiv, Header, TextareaEdit, TitleColumn, Ul} from "./core";
import {editColumn} from "../actions";
import {bindActionCreators} from "redux";
import {Droppable} from "react-beautiful-dnd";
import {connect} from "react-redux";

class Column extends Component {
  state = {editing: false, columnTitle: this.props.title};

  loadCards = () => {
    return this.props.cards.map((element, index) => {
      return (
        <Card
          key={element.name}
          id={element.id}
          index={index}
          name={element.name}
          column_id={this.props.id}
        />
      );
    });
  };

  handleClick = () => {
    this.setState({editing: !this.state.editing});
  };

  handleChangeTitle = event => {
    this.setState({columnTitle: event.target.value});
  };

  saveTitle = () => {
    this.setState({editing: false});
    this.props.editColumn({id: this.props.id, title: this.state.columnTitle});
  };

  render() {
    return (
      <ColumnDiv id={this.props.id}>
        <Header>
          {this.state.editing ? (
            <TextareaEdit
              value={this.state.columnTitle}
              onChange={e => this.handleChangeTitle(e)}
              onBlur={this.saveTitle}
            />
          ) : (
            <TitleColumn onClick={this.handleClick}>
              {this.state.columnTitle}
            </TitleColumn>
          )}
        </Header>
        <FormNewCard columnTitle={this.props.title} />
        <Droppable droppableId={this.props.id.toString()}>
          {provided => (
            <Ul ref={provided.innerRef} {...provided.droppableProps}>
              {this.loadCards()}
              {provided.placeholder}
            </Ul>
          )}
        </Droppable>
      </ColumnDiv>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({editColumn}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Column);
