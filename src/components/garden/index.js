import { h, Component, render } from 'preact';
import s from './style.css';
// import s from '../../style.css';
import rows from '../../../rows_JSON';

class Garden extends Component {
    //TODO move this into constants file
    gardenGridPositions = [
        'A1',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
        'B1',
        'B10',
        'B11',
        'B12',
        'B13',
        'B14',
        'B15',
        'B16',
        'B2',
        'B3',
        'B4',
        'B5',
        'B6',
        'B7',
        'B8',
        'B9',
        'C1',
        'C10',
        'C11',
        'C12',
        'C13',
        'C14',
        'C15',
        'C16',
        'C2',
        'C3',
        'C4',
        'C5',
        'C6',
        'C7',
        'C8',
        'C9',
        'D1',
        'D2',
        'D3',
        'E1',
        'E2',
        'E3',
        'F1',
        'F2',
        'F3',
        'G1',
        'G2',
        'G3',
        'H1',
        'H2',
        'H3',
        'J1',
        'J2',
        'J3',
        'K1',
        'K2',
        'K3',
        'L1',
        'L2',
        'L3',
        'M1',
        'M2',
        'M3',
        'N1',
        'N2',
        'N3',
        'P1',
        'P10',
        'P11',
        'P12',
        'P13',
        'P14',
        'P15',
        'P16',
        'P2',
        'P3',
        'P4',
        'P5',
        'P6',
        'P7',
        'P8',
        'P9',
        'Q1',
        'Q10',
        'Q11',
        'Q12',
        'Q13',
        'Q14',
        'Q15',
        'Q16',
        'Q2',
        'Q3',
        'Q4',
        'Q5',
        'Q6',
        'Q7',
        'Q8',
        'Q9',
        'R1',
        'R10',
        'R11',
        'R12',
        'R13',
        'R14',
        'R15',
        'R16',
        'R2',
        'R3',
        'R4',
        'R5',
        'R6',
        'R7',
        'R8',
        'R9',
    ];
    deckingGridPositions = [
        'A17',
        'A18',
        'A19',
        'B17',
        'B18',
        'B19',
        'C17',
        'C18',
        'C19',
        'D17',
        'D18',
        'D19',
        'E17',
        'E18',
        'E19',
        'F17',
        'F18',
        'F19',
        'G17',
        'G18',
        'G19',
        'H17',
        'H18',
        'H19',
        'J17',
        'J18',
        'J19',
        'K17',
        'K18',
        'K19',
        'L17',
        'L18',
        'L19',
        'M17',
        'M18',
        'M19',
        'N17',
        'N18',
        'N19',
        'P17',
        'P18',
        'P19',
        'Q17',
        'Q18',
        'Q19',
        'R17',
        'R18',
        'R19',
    ];
    columnNames = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
    ];
    rowNamesGarden = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    rowNamesDecking = [17, 18, 19];

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
                    acc[row.position] = {
                        //TODO don't know if I need this anymore
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
                    };
                }
                return acc;
            }, {});

            return values;
        } catch (err) {
            console.log('getPlantData error', err);
        }
    };

    async componentDidMount() {
        const rows = await this.getRows();
        const plantData = this.getPlantData(rows);
        this.setState(plantData); //?? should I do this here? **
    }

    render() {
        const mapToButtons = (gridPositions) =>
            gridPositions.map((gridPosition) => {
                if (
                    this.state[gridPosition] &&
                    this.state[gridPosition].isFilled
                ) {
                    const { position, perennialAnnual, colour } = this.state[
                        gridPosition
                    ];
                    const buttonStyle = {
                        'grid-area': position,
                        'background-color': colour,
                    };

                    return (
                        <button
                            class={[s['grid-plant'], s[perennialAnnual]].join(
                                ' '
                            )}
                            style={buttonStyle}
                            id={position}
                        ></button>
                    );
                } else {
                    return (
                        <button
                            class={s['grid-plant']}
                            id={gridPosition}
                        ></button>
                    );
                }
            });

        const mapToGridBorderDivs = (borderPositions) =>
            borderPositions.map((name) => (
                <div class={s['name-item']}>{name}</div>
            ));

        const gardenGridItems = mapToButtons(this.gardenGridPositions);
        const deckingGridItems = mapToButtons(this.deckingGridPositions);
        const columnBorder = mapToGridBorderDivs(this.columnNames);
        const gardenRowsBorder = mapToGridBorderDivs(this.rowNamesGarden);
        const deckingRowsBorder = mapToGridBorderDivs(this.rowNamesDecking);

        return (
            <div class={s.garden}>
                <div class={s['col-name']}>{columnBorder}</div>
                <div class={s['row-name-borders']}>{gardenRowsBorder}</div>
                <div class={s['row-name-decking']}>{deckingRowsBorder}</div>
                <div class={[s['borders-grid'], s.border].join(' ')}>
                    {gardenGridItems}
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
                <div class={[s['decking-grid'], s.border].join(' ')}>
                    {deckingGridItems}
                </div>
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

// **
// You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it
// will happen before the browser updates the screen. This guarantees that even though the render() will be
// called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because
// it often causes performance issues. In most cases, you should be able to assign the initial state in the
// constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to
// measure a DOM node before rendering something that depends on its size or position.
