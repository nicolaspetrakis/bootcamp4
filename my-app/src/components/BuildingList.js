import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		var { newdata, filterText } = this.props;

		var b = newdata
		.filter(directory => {
		return directory.name.indexOf(filterText) >= 0	
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}> 
					{directory.name} </td>
				</tr>
			);
		});
		return <div>{b}</div>;
	}
}
export default BuilingList;
