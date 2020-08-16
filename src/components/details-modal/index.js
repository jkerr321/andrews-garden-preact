import { h, Component, render } from 'preact';
import s from './style.css';

class DetailsModal extends Component {
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
            notes,
        } = this.props; //?? should I put props in state?

        return (
            <div class={[s.modal, s.border].join(' ')}>
                <div class={s['modal-content']}></div>
            </div>
        );
    }
}

export default DetailsModal;

{
    /* <div class="modal-content modal-initial js-modal-initial">
                <div class="modal-common-name">Click on a spot to find out more :)</div>
            </div>
            <div class="modal-content js-modal-content-info hidden">
                <button class="button button--small border js-modal-edit-button">Edit</button>
                <div class="modal-title js-modal-latin-name"></div>
                <div class="modal-common-name js-modal-common-name"></div>
                <div class="modal-perennial-annual js-modal-perennial-annual"></div>
                <div class="js-modal-planted-date"></div>
                <div class="modal-image js-modal-image"></div>
                <div class="modal-link js-modal-link"></div>
                <div class="modal-notes js-modal-notes"></div>
            </div>
            <div class="modal-content js-modal-content-form hidden">
                <form method="POST" action="/{{seasonPath}}"></form>
                    <div class="modal-title js-form-title"></div>
                    <div class="form-body">
                            <label class="form-body__label" for="form-latin-name">Latin Name</label>
                            <input type="text" name="latinName" placeholder="" id="form-latin-name" class="js-form-latin-name form-body__input"></input>
                            <label class="form-body__label" for="form-common-name">Common Name</label>
                            <input type="text" name="commonName" placeholder="" id="form-common-name" class="js-form-common-name form-body__input"></input>
                    </div>
                    <label for="perennial">Perennial</label>
                    <input type="radio" id="perennial" name="perennialAnnual" value="Perennial" class="js-form-perennial">
                    <label for="annual">Annual</label>
                    <input type="radio" id="annual" name="perennialAnnual" value="Annual" class="js-form-annual"></input>
                    <div class="form-body">
                        <label class="form-body__label" for="colour">Colour <a href="/colours" target="_blank">(options)</a></label>
                        <select id="colour" name="colour" class="js-form-colour form-body__input">
                            {{#each colours}}
                            <option value="{{this}}">{{this}}</option>
                            {{/each}}
                        </select>
                        <label class="form-body__label" for="form-planted-date">Planted Date</label>
                        <input type="text" name="plantedDate" placeholder="" id="form-planted-date" class="js-form-planted-date form-body__input"></input>
                        <label class="form-body__label" for="form-image">Image (URL)</label>
                        <input type="text" name="image" placeholder="" id="form-image" class="js-form-image form-body__input"></input>
                        <label class="form-body__label" for="form-link">RHS Link</label>
                        <input type="text" name="link" placeholder="" id="form-link" class="js-form-link form-body__input"></input>
                        <label class="form-body__label" for="notes">Notes</label>
                        <textarea name="notes" rows="4" id="form-notes" class="js-form-notes form-body__input"></textarea>
                        <input id="form-position" name="position" class="js-form-position hidden"></input>
                        <input id="form-filled" name="filled" value="true" class="hidden"></input>
                    </div>
                    <button class="button button--small border" type="submit">Submit</button>
                    <button class="button button--small border" type="submit" name="removePlant" value="true">Remove Plant</button>
                </form>
            </div> */
}
