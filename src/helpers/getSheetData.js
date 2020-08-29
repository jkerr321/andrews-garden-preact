import mockRows from "./rows_JSON";

const getSheetData = async () => {
  try {
    console.info("getRows: starting");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ); //just to get some async call happening
    console.info("getRows: complete");
    return mockRows;
  } catch (err) {
    console.error("getRows error", err);
    throw new Error(`getRows error: ${err}`);
  }
};

const getPlantData = async () => {
  try {
    const rows = await getSheetData();
    const values = rows.reduce((acc, row) => {
      if (row.position) {
        //TODO tidy this up - am i using all these values now?
        acc[row.position] = {
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
          notes: row.notes
        };
      }
      return acc;
    }, {});

    return values;
  } catch (err) {
    console.error("getPlantData error", err);
  }
};

export default getPlantData;
