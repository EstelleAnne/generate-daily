import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

import App from './src/index.js';
import './src/index.scss';
class Demo extends Component{
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
  }
  showTips=()=>{
    this.setState({
      visible:true
    })
  }
	closeNote=()=>{
		this.setState({
      visible:false
    })
	}

  render () {
    return (
      <div>
      <div className='daily' onClick={this.showTips}>点击</div>
      	  <App showTips={this.showTips} visible={this.state.visible} closeNote={this.closeNote}/>
      </div>
      
    )
  }
}
render(<Demo />, document.getElementById('content'))
