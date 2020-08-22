import React from "react";

class InfoBox extends React.Component {
  render() {
    const {
      position,
      commonName,
      latinName,
      perennialAnnual,
      plantedDate,
      floweringPeriod,
      colour,
      image,
      link,
      isFilled,
      notes
    } = this.props; //?? should I put props in state?

    return (
      <div className="modal border" id="modal" key={position}>
        <div className="modal-content">
          <button className="button button--small border">Edit</button>
          <div className="modal-title">{latinName}</div>
          <div className="modal-common-name">
            {commonName || "Click on a spot to find out more :)"}
          </div>
          <div className="modal-perennial-annual">{perennialAnnual}</div>
          <div>{plantedDate}</div>
          <img className="modal-image" src={image} alt=""></img>
          <div className="modal-link">{link}</div>
          <div className="modal-notes">{notes}</div>
        </div>
      </div>
    );
  }
}

export default InfoBox;

{
  /* <div className="modal-content modal-initial js-modal-initial">
                <div className="modal-common-name">Click on a spot to find out more :)</div>
            </div>
            <div className="modal-content js-modal-content-info hidden">
                <button className="button button--small border js-modal-edit-button">Edit</button>
                <div className="modal-title js-modal-latin-name"></div>
                <div className="modal-common-name js-modal-common-name"></div>
                <div className="modal-perennial-annual js-modal-perennial-annual"></div>
                <div className="js-modal-planted-date"></div>
                <div className="modal-image js-modal-image"></div>
                <div className="modal-link js-modal-link"></div>
                <div className="modal-notes js-modal-notes"></div>
            </div>
            <div className="modal-content js-modal-content-form hidden">
                <form method="POST" action="/{{seasonPath}}"></form>
                    <div className="modal-title js-form-title"></div>
                    <div className="form-body">
                            <label className="form-body__label" for="form-latin-name">Latin Name</label>
                            <input type="text" name="latinName" placeholder="" id="form-latin-name" className="js-form-latin-name form-body__input"></input>
                            <label className="form-body__label" for="form-common-name">Common Name</label>
                            <input type="text" name="commonName" placeholder="" id="form-common-name" className="js-form-common-name form-body__input"></input>
                    </div>
                    <label for="perennial">Perennial</label>
                    <input type="radio" id="perennial" name="perennialAnnual" value="Perennial" className="js-form-perennial">
                    <label for="annual">Annual</label>
                    <input type="radio" id="annual" name="perennialAnnual" value="Annual" className="js-form-annual"></input>
                    <div className="form-body">
                        <label className="form-body__label" for="colour">Colour <a href="/colours" target="_blank">(options)</a></label>
                        <select id="colour" name="colour" className="js-form-colour form-body__input">
                            {{#each colours}}
                            <option value="{{this}}">{{this}}</option>
                            {{/each}}
                        </select>
                        <label className="form-body__label" for="form-planted-date">Planted Date</label>
                        <input type="text" name="plantedDate" placeholder="" id="form-planted-date" className="js-form-planted-date form-body__input"></input>
                        <label className="form-body__label" for="form-image">Image (URL)</label>
                        <input type="text" name="image" placeholder="" id="form-image" className="js-form-image form-body__input"></input>
                        <label className="form-body__label" for="form-link">RHS Link</label>
                        <input type="text" name="link" placeholder="" id="form-link" className="js-form-link form-body__input"></input>
                        <label className="form-body__label" for="notes">Notes</label>
                        <textarea name="notes" rows="4" id="form-notes" className="js-form-notes form-body__input"></textarea>
                        <input id="form-position" name="position" className="js-form-position hidden"></input>
                        <input id="form-filled" name="filled" value="true" className="hidden"></input>
                    </div>
                    <button className="button button--small border" type="submit">Submit</button>
                    <button className="button button--small border" type="submit" name="removePlant" value="true">Remove Plant</button>
                </form>
            </div> */
}
