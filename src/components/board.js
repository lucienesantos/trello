import React, {Component} from 'react';
import FormNewList from './formNewList/FormNewList'
import Column from './Column'

export default class Board extends Component {

  state = { 
    colums: [], 
  }

  render(){
    return (
      <div className="flex-row">
        <div className="columns">
          <Column />
        </div>  
        <div className='row-inner'>
          <FormNewList />
        </div>
      </div>  
    )    
  }
}