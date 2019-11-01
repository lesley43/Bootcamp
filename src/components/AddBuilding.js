import React from 'react';

class AddBuilding extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    this.props.addBuilding(
      data.get('buildingCode'),
      data.get('buildingName'),
      data.get('buildingLongitude'),
      data.get('buildingLatitude'),
      data.get('buildingAddress')
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <label for="build_name">Name</label>
          <input id="build_name" name="buildingName" type="text"/>

          <label for="build_code">Code</label>
          <input id="build_code" name="buildingCode" type="text"/>

          <label for="build_long">Longitude</label>
          <input id="build_long" name="buildingLongitude" type="text"/>

          <label for="build_lat">Latitude</label>
          <input id="build_lat" name="buildingLatitude" type="text"/>

          <label for="build_addr">Address</label>
          <input id="build_addr" name="buildingAddress" type="text"/>
			    <button type="submit" class="btn btn-outline-success" id="add-bld">Add Building</button>
        </form>
      </div>
    );
  }
}

export default AddBuilding;
