import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding'
let building = 148;


class App extends React.Component {
  buildingList = this.props.data;
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildingList: this.buildingList
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  newBuilding(newB){
    building = building + 1;
    const newinput = {
      id: (building),
      code: newB[0],
      name: newB[1],
      coordinates: {
        latitude: parseFloat(newB[2]),
        longitude: parseFloat(newB[3]),
      },
      address: newB[4]
    }
    this.buildingList.push(newinput);
      this.setState({
        buildingList: this.buildingList
      })
  }

  buildingRemove(id){
    this.buildingList.splice(id -1,1);

    building --;
    for (var i = id-1; i < building; i++){
      this.buildingList[i].id = this.buildingList[i].id-1;
    }

    this.setState({
      newdata: this.buildingList
    })
  }

  render() {
    
    return (

      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search 
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}
        />
        <AddBuilding
        newBuilding = {this.newBuilding.bind(this)}
        />
        <RemoveBuilding
        selectedBuilding = {this.state.selectedBuilding}
        buildingRemove = {this.buildingRemove.bind(this)}
         />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    newdata = {this.state.buildingList}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              buildinginfo = {this.state.selectedBuilding}
              buildingList = {this.state.buildingList}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
