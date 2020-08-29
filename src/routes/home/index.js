import React from "react";
import Header from "../../components/header";
import Garden from "../../components/garden";
import InfoBoxContainer from "../../components/info-box-container";
import getPlantData from "../../helpers/getSheetData";
import { GARDEN_GRID_POSITIONS, DECKING_GRID_POSITIONS } from "../../constants";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { showInfo: false, iterator: 1 };
  }

  async componentDidMount() {
    const plantData = await getPlantData();
    this.setState({
      allPlantData: plantData,
      iterator: (this.state.iterator += 1)
    });
  }

  getSpecificPlantInfo = selectedGridPosition => {
    const allGridPositions = GARDEN_GRID_POSITIONS.concat(
      DECKING_GRID_POSITIONS
    );
    return allGridPositions.reduce((selectedPlantInfoAcc, gridPosition) => {
      if (gridPosition === selectedGridPosition) {
        selectedPlantInfoAcc = this.state.allPlantData[gridPosition];
      }
      return selectedPlantInfoAcc;
    }, "");
  };

  showInfo = selectedGridPosition => {
    const existinginfo = document.getElementById("info");
    if (existinginfo) {
      existinginfo.remove();
    }
    const selectedPlantInfo = this.getSpecificPlantInfo(selectedGridPosition);
    this.setState({
      showInfo: true,
      selectedPlantInfo
    });
    console.log("this.state inside showInfo", this.state); //first time showinfo is false and there is no selectedPlantInfo
  };

  render() {
    const allPlantData = this.state.allPlantData || {};
    return (
      <div className="layout">
        <Header />
        <Garden
          key={this.state.iterator} //?? have to do this to force React to reconstruct Garden, otherwise it renders but doesn't call the constructor setting the state with the new props, feel like this is a hacky way to do this
          controlInfoBox={this.showInfo}
          allPlantData={allPlantData}
        />
        {this.state.showInfo && (
          <div>
            <InfoBoxContainer
              selectedPlantInfo={this.state.selectedPlantInfo}
            />
          </div>
        )}
        <div id="info-container"></div>
      </div>
    );
  }
}

export default Home;
