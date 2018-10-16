import React, {Component} from 'react';
import FormNewList from './form-new-list/form-new-list'

export default class Board extends Component {

  state = { 
    colums: [], 
  }

  render(){
    return (
      <div className='row'>
        <FormNewList />
      </div>
    )    
  }
}