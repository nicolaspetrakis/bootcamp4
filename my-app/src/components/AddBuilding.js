import React from 'react';

class AddBuilding extends React.Component {
		//console.log('This is my directory file', this.props.data);
	submitInput(){
		const newBuild = this.new.value;
		const newList = newBuild.split(",");
		this.props.newBuild(newList)
	}
		render(){
			return(
				<form>
					<input 
						type="text" 
						ref = { (value) => this.new = value } 
						placeholder = "Add a new building, inputformat: Code, Name, Latitude, Longitude, Address"
						onDoubleClick = {this.submitInput.bind(this)}
					/>
				</form>
			)
		}
}
export default AddBuilding;
