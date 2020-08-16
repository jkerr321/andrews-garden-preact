import { h, Component, render } from 'preact';
import s from './style.css';
import DetailsModal from '../details-modal';

class GridPlant extends Component {
    state = { showModal: false }; //?? should I use constructor?
    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    render() {
        const {
            plantExistsInGrid,
            position,
            perennialAnnual,
            colour,
        } = this.props; //?? should I put props in state?

        if (plantExistsInGrid) {
            const buttonStyle = {
                'grid-area': position,
                'background-color': colour,
            };

            return (
                <button
                    class={[s['grid-plant'], s[perennialAnnual]].join(' ')}
                    style={buttonStyle}
                    id={position}
                    onClick={this.toggleModal}
                ></button>
            );
        } else {
            const props = this.props;
            return (
                <button
                    class={s['grid-plant']}
                    id={position}
                    onClick={this.toggleModal}
                ></button>
            );
        }
    }
}

export default GridPlant;
