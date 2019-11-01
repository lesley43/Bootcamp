import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory =>  {
				//remove names that do not match current filter text
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td><b>{directory.code}</b></td>
						<td onClick={() => selectedUpdate(directory.id)}> {directory.name} </td>
						<td>
							<RemoveBuilding
								id={directory.id}
								removeBuilding={this.props.removeBuilding.bind(this)}
							/>
						</td>
					</tr>
				);
		});
		return <div>{buildingList}</div>;
	}
}

export default BuilingList;
