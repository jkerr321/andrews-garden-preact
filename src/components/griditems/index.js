import { h, Component } from 'preact';
import s from './style.css';
// import s from '../../style.css';
// const colours = require('../colours');
import rows from '../../../rows_JSON';

class GridItems extends Component {
    getRows = async () => {
        try {
            console.info('getRows: starting');
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts/1'
            ); //just to get some async call happening
            console.info('getRows: complete');
            return rows;
        } catch (err) {
            console.error('getRows error', err);
            throw new Error(`getRows error: ${err}`);
        }
    };

    getPlantData = (rows) => {
        try {
            const values = rows.reduce((acc, row) => {
                if (row.position) {
                    acc.push({
                        isDecking:
                            `${row.position}`.includes('17') ||
                            `${row.position}`.includes('18') ||
                            `${row.position}`.includes('19'),
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
                        notes: row.notes,
                    });
                }
                return acc;
            }, []);

            return values;
        } catch (err) {
            console.log('getPlantData error', err);
        }
    };

    // Lifecycle: Called whenever our component is created
    // async componentDidMount() {
    //     const rows = await getRows();
    //     console.log('==================');
    //     console.log('rows[0]', rows[0]);
    //     console.log('==================');
    //     const gridItems = getPlantData(rows); //??should this be setState?
    //     this.state.gridItems = gridItems; //TODO might not need grid items as its own thing here
    // }

    // componentDidUpdate() {}

    // Lifecycle: Called just before our component will be destroyed
    // componentWillUnmount() {
    // }

    render() {
        this.state.gridItems = this.getPlantData(rows); //TODO might not need grid items as its own thing here
        const { gridItems } = this.state;

        return (
            <div class={s.garden}>
                <div class={s['col-name']}>
                    <div class={s['name-item']}>A</div>
                    <div class={s['name-item']}>B</div>
                    <div class={s['name-item']}>C</div>
                    <div class={s['name-item']}>D</div>
                    <div class={s['name-item']}>E</div>
                    <div class={s['name-item']}>F</div>
                    <div class={s['name-item']}>G</div>
                    <div class={s['name-item']}>H</div>
                    <div class={s['name-item']}>J</div>
                    <div class={s['name-item']}>K</div>
                    <div class={s['name-item']}>L</div>
                    <div class={s['name-item']}>M</div>
                    <div class={s['name-item']}>N</div>
                    <div class={s['name-item']}>P</div>
                    <div class={s['name-item']}>Q</div>
                    <div class={s['name-item']}>R</div>
                </div>
                <div class={s['row-name-borders']}>
                    <div class={s['name-item']}>1</div>
                    <div class={s['name-item']}>2</div>
                    <div class={s['name-item']}>3</div>
                    <div class={s['name-item']}>4</div>
                    <div class={s['name-item']}>5</div>
                    <div class={s['name-item']}>6</div>
                    <div class={s['name-item']}>7</div>
                    <div class={s['name-item']}>8</div>
                    <div class={s['name-item']}>9</div>
                    <div class={s['name-item']}>10</div>
                    <div class={s['name-item']}>11</div>
                    <div class={s['name-item']}>12</div>
                    <div class={s['name-item']}>13</div>
                    <div class={s['name-item']}>14</div>
                    <div class={s['name-item']}>15</div>
                    <div class={s['name-item']}>16</div>
                </div>
                <div class={s['row-name-decking']}>
                    <div class={s['name-item']}>17</div>
                    <div class={s['name-item']}>18</div>
                    <div class={s['name-item']}>19</div>
                </div>
                <div class={[s['borders-grid'], s.border].join(' ')}>
                    <GridItems />
                    {gridItems.map((gridItem) => (
                        <button
                            class={[
                                s['grid-plant'],
                                s[gridItem.perennialAnnual],
                            ].join(' ')}
                        ></button>
                    ))}
                    <div class={[s.grass, s.border].join(' ')}>
                        <form
                            action="https://www.niwaki.com/media/c/prd/334/1492696764/rc/1000/3753/80/niwaki-pro-snips.jpg"
                            method="get"
                        >
                            <button class={s.snips}></button>
                        </form>
                        <img
                            src="./assets/background.png"
                            alt="Andrew's Garden Logo over grass section of the garden"
                        ></img>
                    </div>
                </div>
                <div class={[s['decking-grids'], s.border].join(' ')}>
                    {/* {{#each gridItems}}
            {{#if this.isDecking}}
            {{>grid-plant}}
            {{/if}}
            {{/each}} */}
                </div>
            </div>
        );
    }
}

export default GridItems;
