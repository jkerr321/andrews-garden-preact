import React from "react";

class GridPlant extends React.Component {
  render() {
    const { gridPosition, perennialAnnual, colour } = this.props; //?? should I put props in state?

    const buttonStyle = {
      gridArea: gridPosition,
      backgroundColor: colour
    };

    return (
      <button
        className={"grid-plant" + " " + perennialAnnual}
        style={buttonStyle}
        key={gridPosition}
        onClick={() => this.props.controlInfoBox(gridPosition)}
      ></button>
    );
  }
}

export default GridPlant;
