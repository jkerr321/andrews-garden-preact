import React from "react";
import backgroundImage from "../assets/background.png";
import {
  GARDEN_GRID_POSITIONS,
  DECKING_GRID_POSITIONS,
  COLUMN_NAMES,
  ROW_NAMES_DECKING,
  ROW_NAMES_GARDEN
} from "../constants";
import GridPlant from "./grid-plant";

class Garden extends React.Component {
  constructor(props) {
    super(props);
    this.controlInfoBox = this.props.controlInfoBox;
    this.state = { allPlantData: this.props.allPlantData };
  }

  render() {
    const populateGrid = gridPositions =>
      gridPositions.map(gridPosition => {
        const currentPlantData = this.state.allPlantData[gridPosition];
        return (
          <GridPlant
            key={gridPosition}
            gridPosition={gridPosition}
            controlInfoBox={this.controlInfoBox}
            {...currentPlantData}
          />
        );
      });

    const populateGridAxis = borderPositions =>
      borderPositions.map(name => (
        <div key={name} className="name-item">
          {name}
        </div>
      ));

    const gridItemsGarden = populateGrid(GARDEN_GRID_POSITIONS);
    const gridItemsDecking = populateGrid(DECKING_GRID_POSITIONS);

    const columnNames = populateGridAxis(COLUMN_NAMES);
    const rowNamesGarden = populateGridAxis(ROW_NAMES_GARDEN);
    const rowNamesDecking = populateGridAxis(ROW_NAMES_DECKING);

    return (
      <div className="garden">
        <div className="col-name">{columnNames}</div>
        <div className="row-name-borders">{rowNamesGarden}</div>
        <div className="row-name-decking">{rowNamesDecking}</div>
        <div className="borders-grid border">
          {gridItemsGarden}
          <div className="grass border">
            <img
              src={backgroundImage}
              alt="Andrew's Garden Logo over grass section of the garden"
            ></img>
          </div>
        </div>
        <div className="decking-grid border">{gridItemsDecking}</div>
      </div>
    );
  }
}

export default Garden;
