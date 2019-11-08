import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const{buildingList, buildinginfo} = this.props;
		if ((buildingList[buildinginfo - 1]) && (buildingList[buildinginfo - 1].coordinates)){
			return (
				<div>
					<p>
						{'Address: '}
						{buildingList[buildinginfo - 1].address}
						{', Latitude: '}
						{buildingList[buildinginfo - 1].coordinates.latitude.toString()}
						{', Longitude: '}
						{buildingList[buildinginfo - 1].coordinates.longitude.toString()}
					</p>
				</div>
			);
			}
			else if (buildingList[buildinginfo - 1]){
				return(
					<div>
						<p>
							{' '}
							{buildingList[buildinginfo - 1].address}
						</p>
					</div>
				);
			}
			else {
				return (
					<div>
						<p>
							{' '}
							<i>Click on a name to view more information</i>
						</p>
					</div>
			);
			}
	}
}
export default ViewBuilding;
