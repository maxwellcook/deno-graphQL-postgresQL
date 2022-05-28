import database from '../models/database.ts';

const mediaController: any = {};

mediaController.pullAllMedia = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."Media"');
  // console.log('tables.rows', tables.rows);
  // iterate through each subarray in tables array and push each element of subarray to new object in array
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], type: el[1], title: el[2] }
    );
  });
  // console.log(resultArr);
  return resultArr;
}

mediaController.createMedia = async() => {
  await database.connect();
  const sqlString = `INSERT INTO "public"."Media" (type, title) VALUES ($1, $2);`;
  const newMediaInputs = ['movie', 'Snakes on a Plane 10'];
  const tables = await database.queryArray(
    sqlString,
    newMediaInputs
  );
  tables
}

export default mediaController;

// Example using the simplified argument interface
// {
//   const result = await client.queryArray(
//     "SELECT ID, NAME FROM PEOPLE WHERE AGE > $1 AND AGE < $2",
//     [10, 20],
//   );
//   console.log(result.rows);
// }

// {
//   const result = await client.queryArray({
//     args: [10, 20],
//     text: "SELECT ID, NAME FROM PEOPLE WHERE AGE > $1 AND AGE < $2",
//   });
//   console.log(result.rows);
// }