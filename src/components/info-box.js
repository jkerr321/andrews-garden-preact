import React from "react";
import plantData from "../helpers/rows_JSON";

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.props.toggleForm;
  }

  getPerennialAnnualValue(value) {
    //TODO change the data so I don't have to do this?
    if (!value) {
      return "";
    } else {
      return value === "P" ? "Perennial" : "Annual";
    }
  }

  updatePlantInfo = () => {
    plantData.forEach(plant => {
      if (plant.position === this.state.gridPosition) {
        Object.keys(plant).forEach(key => {
          plant[key] = this.state[key] || null;
        });
      }
    });
    this.toggleForm();
  };

  render() {
    const {
      gridPosition,
      commonName,
      latinName,
      plantedDate,
      colour,
      image,
      link,
      notes
    } = this.props.selectedPlantInfo || "";

    const perennialAnnual = this.getPerennialAnnualValue(
      this.props.perennialAnnual
    );

    return (
      <div className="info border" id="info" key={gridPosition}>
        <div className="info-content">
          <button
            className="button button--small border"
            onClick={() => this.toggleForm()} //?? why do I have to do this inside function? Why not just this.toggleForm()?
          >
            Edit
          </button>
          <div className="info-title">{latinName}</div>
          <div className="info-common-name">{commonName}</div>
          <div className="info-perennial-annual">{perennialAnnual}</div>
          <div>Planted: {plantedDate}</div>
          <img className="info-image" src={image} alt=""></img>
          <a className="info-link" href={link} target="_blank" rel="noreferrer">
            RHS link
          </a>
          <div className="info-notes">{notes}</div>
        </div>
      </div>
    );
  }
}

export default InfoBox;
