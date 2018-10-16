import React, { Component } from 'react';
import './form-new-list.css';
import { FaPlus } from "react-icons/fa";



export default class FormNewList extends Component {

  
  state = { active: false }

  handleSubmit = () => {

  }

  handleClickAdd = () => {
    this.setState({active: true})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.state.active ? 
        (<div>
          <input className="list-name-input" type="text" name="name" placeholder="Insira o título da lista..." autoComplete="off" dir="auto" maxLength="512"/>
        </div>):
        (<a onClick={this.handleClickAdd}>
          <span><span className='icon-plus'><FaPlus /> </span>Adicionar nova lista</span>
         </a>)
      }
      </form>
    )
  }
}