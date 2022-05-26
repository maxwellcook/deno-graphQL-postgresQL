import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";

const config = 'postgres://bwzctbwf:EmEg3YMJbUzhGhipRHACTEj05iqNaCbm@lallah.db.elephantsql.com/bwzctbwf';
const database = new Client(config);

const pullAllData = async() => {
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

const pullAllUsers = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."User"');
  // iterate through each subarray in tables array and push each element of subarray to new object in array
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], username: el[1], password: el[2] }
    );
  });
  // console.log(resultArr);
  return resultArr;
}

export const resolvers = { 
  Query: { 
    hello: () => `Hello World!`, 
    allMedia: () => pullAllData(),
    allUsers: () => pullAllUsers()
  }, 
  // Mutation: {
  //   insertPosition: (_: any, args: any ) => console.log(args)
  // }
}