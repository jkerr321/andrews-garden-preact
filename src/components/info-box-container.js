import React from "react";
import plantData from "../helpers/rows_JSON";
import InfoBox from "./info-box";
import InfoForm from "./info-form";

class InfoBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectedPlantInfo = props.selectedPlantInfo;
    this.state = {
      showInfoBox: !!this.selectedPlantInfo.isFilled
    };
  }

  toggleForm = () => this.setState({ showInfoBox: !this.state.showInfoBox });

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
    return this.state.showInfoBox ? (
      <InfoBox
        selectedPlantInfo={this.selectedPlantInfo}
        toggleForm={this.toggleForm}
      />
    ) : (
      <InfoForm
        selectedPlantInfo={this.selectedPlantInfo}
        toggleForm={this.toggleForm}
      />
    );
  }
}

export default InfoBoxContainer;

// TODO
// initial info box - put initial render state in here then render the below HTML
// colours select box
//radio button placeholders

// <div className="info-common-name">Click on a spot to find out more :)</div>
// <label className="form-body__label" htmlFor="colour">Colour <a href="/colours" target="_blank">(options)</a></label>
// <select id="colour" name="colour" className="js-form-colour form-body__input">
//     {{#each colours}}
//     <option value="{{this}}">{{this}}</option>
//     {{/each}}
// </select>
