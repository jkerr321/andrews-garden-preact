import React from "react";
import plantData from "../helpers/rows_JSON";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.selectedPlantInfo = props.selectedPlantInfo;
    this.toggleForm = this.props.toggleForm;

    this.state = {
      //?? is this the best way to do this? Can I use destructuring?
      gridPosition: this.selectedPlantInfo.position || "",
      commonName: this.selectedPlantInfo.commonName || "",
      latinName: this.selectedPlantInfo.latinName || "",
      perennialAnnual: this.getPerennialAnnualValue(
        this.selectedPlantInfo.perennialAnnual
      ),
      plantedDate: this.selectedPlantInfo.plantedDate || "",
      colour: this.selectedPlantInfo.colour || "",
      image: this.selectedPlantInfo.image || "",
      link: this.selectedPlantInfo.link || "",
      notes: this.selectedPlantInfo.notes || "",
      showInfoBox: !!this.selectedPlantInfo.isFilled
    };
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
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
    } = this.state;

    return (
      <div className="info border" id="info" key={gridPosition}>
        <div className="info-content">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.updatePlantInfo();
            }}
          >
            <div className="info-title"></div>
            <div className="form-body">
              <label className="form-body__label" htmlFor="form-latin-name">
                Latin Name
              </label>
              <input
                type="text"
                name="latinName"
                placeholder={latinName}
                id="form-latin-name"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></input>
              <label className="form-body__label" htmlFor="form-common-name">
                Common Name
              </label>
              <input
                type="text"
                name="commonName"
                placeholder={commonName}
                id="form-common-name"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></input>
            </div>
            <label htmlFor="perennial">Perennial</label>
            <input
              type="radio"
              id="perennial"
              name="perennialAnnual"
              value="Perennial"
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor="annual">Annual</label>
            <input
              type="radio"
              id="annual"
              name="perennialAnnual"
              value="Annual"
              onChange={this.handleInputChange}
            ></input>
            <div className="form-body">
              <label className="form-body__label" htmlFor="form-planted-date">
                Planted Date
              </label>
              <input
                type="text"
                name="plantedDate"
                placeholder={plantedDate}
                id="form-planted-date"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></input>
              <label className="form-body__label" htmlFor="form-image">
                Image (URL)
              </label>
              <input
                type="text"
                name="image"
                placeholder={image}
                id="form-image"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></input>
              <label className="form-body__label" htmlFor="form-link">
                RHS Link
              </label>
              <input
                type="text"
                name="link"
                placeholder={link}
                id="form-link"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></input>
              <label className="form-body__label" htmlFor="notes">
                Notes
              </label>
              <textarea
                placeholder={notes}
                name="notes"
                rows="4"
                id="form-notes"
                className="form-body__input"
                onChange={this.handleInputChange}
              ></textarea>
              <input //Do I need this? Think I can just use props now
                id="form-position"
                name="position"
                className="hidden"
                value={gridPosition}
                readOnly
              ></input>
              <input //Do I need this? Think I can just use props now
                id="form-filled"
                name="filled"
                value="true"
                className="hidden"
                readOnly
              ></input>
            </div>
            <button className="button button--small border" type="submit">
              Submit
            </button>
            <button className="button button--small border">
              Remove Plant
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default InfoForm;

// TODO
// colours select box
// radio button placeholders
