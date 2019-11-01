import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import { getAllJSDocTagsOfKind } from 'typescript';
import gator from "./UFGator.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    let this_id = id - 1;
    this.setState({selectedBuilding: this_id});
  }

  addBuilding(code, name, long, lat, addr) {
    let my_id = this.state.data[this.state.data.length - 1].id;
    let this_list = this.state.data;
    this_list.push({
      id: my_id + 1,
      code: code,
      name: name,
      coordinates: {
          longitude: long,
          latitude: lat
      },
      address: addr
    });
    this.setState({
      data: this_list
    });
  }

  removeBuilding(id) {
    let this_list = this.state.data.filter(building => {
      return building.id != id;
    });
    this.setState({
      data: this_list
    });
  }

  render() {
    return (
      <div className="bg">
        <div className="row header-row">
          <img src={gator} alt="Gator"/>
          <h1 className="header">UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <h3><b>Code Building</b></h3>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <div className="card card-col-2">
                <div className="card-body card-listing">
                  <h3 className="card-title">Building Information</h3>
                  <ViewBuilding
                    selectedBuilding={this.state.selectedBuilding}
                    data={this.props.data}
                  />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Add a Building</h3>
                  <AddBuilding addBuilding = {this.addBuilding.bind(this)} />
                </div>
              </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}
export default App;
