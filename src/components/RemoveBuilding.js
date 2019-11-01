import React from 'react';

class RemoveBuilding extends React.Component {
  onRemoveBuilding() {
    this.props.removeBuilding(this.props.id);
  }

  render() {
    return (
			<button type="button" class="btn btn-outline-danger" onClick={this.onRemoveBuilding.bind(this)}>Remove</button>
    );
  }
}

export default RemoveBuilding;
