import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import './index.scss';
export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			num:0,
			didShow:false,
			haveShow:false,
			noteValue:'',
			dStyle:0,
			preArr:['私密']
		}
	}
	handlerKeyup=()=>{
		
		let strLen = document.getElementById('setContent').value.length;
		this.setState({
			num:strLen
		})
	}
privateBtn=()=>{
	this.setState({
		didShow:true
	})
}
picTips=()=>{
	this.setState({
		haveShow:!this.state.haveShow
	})
}
vanish=(e)=>{
	let arr = ['公开','部门可见','私密']
	let index=e.target.id;

	console.log(arr[index])
	this.setState({
		didShow:false,
		preArr:arr[index]
	})
	console.log(this.state.preArr)
}

disappear=()=>{
	this.setState({
		haveShow:false
	})
}
makeNote=()=>{
	this.refs.textarea.setAttribute("onfocus",'1');
	let textContent = "未分类：\n\[未开始]:\n\[进行中]:"
	this.setState({
		noteValue:textContent,
		dStyle:1
	})

}
changeContent=(e)=>{
	// let cValue = document.getElementById('setContent').value;
	// console.log(e.target.value)
	// debugger
	this.setState({
		noteValue:e.target.value
	})
	
}
	render () {
		//let didShow=this.props.visible;
		let picStyle = this.state.haveShow?{display:'block'}:{display:'none'};
		let privateStyle = this.state.didShow?{display:'block'}:{display:'none'};
		let curTime = new Date();
		let showStyle=this.props.visible?{display:'block'}:{display:'none'};
	
		//let deleteStyle=this.state.show?{display:'block'}:{display:'none'};
		return (
			<div className="daily-view" style={showStyle}>
				<div className="title-dp">
					<div className="date-dp">{curTime.getFullYear()+'年'+(curTime.getMonth()+1)+'月'+curTime.getDate()+'日'} 工作日报</div>
					<div className="delete-dp">
						<span className="close-dp"  onClick={this.props.closeNote}>x</span>
					</div>
				</div>
				<div className="action-dp">
					<div className="setNote">
						<button className="setBtn" onClick={this.makeNote}>生成日报</button>
						<button className="setBtn">发送邮件</button>
					</div>
				</div>
				<div className="daily-form" >
					<div className="content-place" className={"dcontent-"+this.state.dStyle}>
						<div className="input-place">
							<textarea id="setContent" ref='textarea' value={this.state.noteValue} onChange={this.changeContent}  onKeyUp={this.handlerKeyup}></textarea>
						</div>
						<div className="count-place">
							<span className="num-place">{this.state.num}</span>/4000
						</div>
					</div>
					<div className="action-place">
						<ul className="list-place">
							<li className="uploader-place">
								
									<div className="upload_component">
										
										<a className="uploader-node" onClick={this.picTips}>文件/图片</a>
										<div className="upload_type" style={picStyle} >
											<span className="upload_new_file" onClick={this.disappear}>本地上传</span>
											<span className="fang_cloud_btn" onClick={this.disappear}>亿方云</span>
										</div>
									</div>
								
								
							</li>
							<li className="member-place">
								<span className="icon-at"></span>
								<a>同事</a>
							</li>
						</ul>
						<button className="btn btn-sure">发布</button>
						<span className="quna_pm" onClick={this.privateBtn}>
							<i className="icon-lock"></i>
							<span className="range-cont" >{this.state.preArr}</span>
							<i className="caret"></i>
						</span>
						<div className="qunartipwrap" style={privateStyle}>
							<div className="qunartip-view">
								<ul>
									<li className="public_qunat" id="0" onClick={this.vanish}>
										<a id="0">
											<span className="tit_qunat" id="0">公开</span>
											<span id="0">所有人可见</span>
										</a>
									</li>
									<li className="private_qunat" id="1" onClick={this.vanish}>
										<a id="1">
											<span className="tit_qunat" id="1">部门可见</span>
											<span id="1">仅我的部门可见</span>
										</a>
									</li>
									<li className="private_qunat cur" id="2" onClick={this.vanish}>
										<a id="2">
											<span className="tit_qunat" id="2">私密</span>
											<span id="2">仅我的上级可见</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = App;