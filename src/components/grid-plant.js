import React from "react";
import InfoBox from "./info-box";

class GridPlant extends React.Component {
  state = { showModal: false }; //?? should I use constructor?

  showModal = () => {
    const existingModal = document.getElementById("modal");
    if (existingModal) {
      existingModal.remove();
    }
    this.setState({ showModal: true });
  };

  render() {
    const { gridPosition, perennialAnnual, colour } = this.props; //?? should I put props in state?

    const buttonStyle = {
      gridArea: gridPosition,
      backgroundColor: colour
    };

    return (
      <React.Fragment>
        <button
          className={"grid-plant" + " " + perennialAnnual}
          style={buttonStyle}
          key={gridPosition}
          onClick={this.showModal}
        ></button>
        {this.state.showModal && (
          <InfoBox key={"modal" + gridPosition} {...this.props} />
        )}
      </React.Fragment>
    );
  }
}

export default GridPlant;
