import React, {Component} from "react";
import Card from "./Card";
import FormNewCard from "./FormNewCard";
import {ColumnDiv, Header, Textarea, TitleColumn, Ul} from "./core";
import {editColumn} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Column extends Component {
  state = {editing: false, columnTitle: this.props.title};

  loadCards = () => {
    return this.props.cards.map(element => {
      return <Card key={element.name} name={element.name} />;
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
            <Textarea
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
        <Ul>{this.loadCards()}</Ul>
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
