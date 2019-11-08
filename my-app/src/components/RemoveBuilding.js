import React from 'react';

class RemoveBuilding extends React.Component {
	
		//const{remove, removebuild} = this.props;
		delete(){
			this.props.buildingRemove(this.props.selectedBuilding);
		}
		render(){
			return(
				<button onClick = {() => this.props.delete(this)}>
				Delete
				</button>
			);
		}
	}
	export default RemoveBuilding;
