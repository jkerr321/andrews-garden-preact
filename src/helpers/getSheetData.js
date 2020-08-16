import mockRows from './rows_JSON';

const getSheetData = async () => {
    try {
        console.info('getRows: starting');
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        ); //just to get some async call happening
        console.info('getRows: complete');
        return mockRows;
    } catch (err) {
        console.error('getRows error', err);
        throw new Error(`getRows error: ${err}`);
    }
};

export default getSheetData;
