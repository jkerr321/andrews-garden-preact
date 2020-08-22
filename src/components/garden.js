import React from "react";
import {
  GARDEN_GRID_POSITIONS,
  DECKING_GRID_POSITIONS,
  COLUMN_NAMES,
  ROW_NAMES_DECKING,
  ROW_NAMES_GARDEN
} from "../constants";
import GridPlant from "./grid-plant";
import getSheetData from "../helpers/getSheetData";

class Garden extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getPlantData = async () => {
    try {
      const rows = await getSheetData();
      const values = rows.reduce((acc, row) => {
        if (row.position) {
          acc[row.position] = {
            position: row.position,
            commonName: row.commonname,
            latinName: row.latinname,
            perennialAnnual: `${row.perennialannual}`.substr(0, 1),
            plantedDate: row.planteddate,
            floweringPeriod: row.floweringperiod,
            colour: row.colour,
            image: row.image,
            link: row.link,
            isFilled: !!row.filled,
            notes: row.notes
          };
        }
        return acc;
      }, {});

      return values;
    } catch (err) {
      console.error("getPlantData error", err);
    }
  };

  async componentDidMount() {
    const plantData = await this.getPlantData();
    this.setState(plantData);
  }

  render() {
    const populateGrid = gridPositions =>
      gridPositions.map(gridPosition => {
        const currentPlantData = this.state[gridPosition];
        const plantExistsInGrid = currentPlantData && currentPlantData.isFilled;

        const props = { plantExistsInGrid, gridPosition, ...currentPlantData };

        return <GridPlant key={gridPosition} {...props} />;
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
              src="./assets/background.png"
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

// module.exports = async (req, res, seasonName) => {
//     try {
//         const seasonPath = req.path.substr(1); // e.g. 'summer19'
//         const rows = await getRows(seasonPath);
//         let gridItems;
//         if (req.method === 'POST') {
//             await updateSpreadsheet(rows, req.body);
//             const updatedRows = await getRows(seasonPath);
//             gridItems = await getPlantData(updatedRows);
//         } else {
//             gridItems = await getPlantData(rows);
//         }
//         return res.render('landing', {
//             gridItems,
//             seasonName,
//             seasonPath,
//             colours,
//         });
//     } catch (err) {
//         console.error('render error', err);
//     }
// };

// updateSpreadsheet = async (rows, reqBody) => {
//     try {
//         rows.forEach(async (row) => {
//             if (row.position === reqBody.position) {
//                 Object.keys(reqBody).forEach((key) => {
//                     if (reqBody.removePlant) {
//                         // remove all values, then put position value back so it still renders as an empty spot on the grid next time round
//                         row[key] = '';
//                         row.position = reqBody.position;
//                     } else if (reqBody[key]) {
//                         // e.g. if (reqBody.colour) {row.colour = reqBody.colour};
//                         row[key] = reqBody[key];
//                     }
//                 });
//                 await row.save();
//             }
//         });

//         return;
//     } catch (err) {
//         console.error('updateSpreadsheet error', err);
//     }
// };
