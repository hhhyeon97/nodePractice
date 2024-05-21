const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('practice');
  //   const inventory = database.collection('inventory');
  const students = database.collection('students');

  // Q1. insertOne

  //   const inventoryData = await inventory.insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' },
  //   });
  //   console.log('result', inventoryData);

  // Q2. insertMany

  //   const inventoryList = [
  //     {
  //       item: 'journal',
  //       qty: 25,
  //       tags: ['blank', 'red'],
  //       size: { h: 14, w: 21, uom: 'cm' },
  //     },
  //     {
  //       item: 'mat',
  //       qty: 85,
  //       tags: ['gray'],
  //       size: { h: 27.9, w: 35.5, uom: 'cm' },
  //     },
  //     {
  //       item: 'mousepad',
  //       qty: 25,
  //       tags: ['gel', 'blue'],
  //       size: { h: 19, w: 22.85, uom: 'cm' },
  //     },
  //   ];
  //   const inventoryData = await inventory.insertMany(inventoryList);
  //   console.log('result', inventoryData);

  // Q3. find

  //   const findItem = await inventory.find({}).toArray();
  //   console.log('result', findItem);

  // Q.4

  //   const inventoryList = [
  //     {
  //       item: 'journal',
  //       qty: 25,
  //       size: { h: 14, w: 21, uom: 'cm' },
  //       status: 'A',
  //     },
  //     {
  //       item: 'notebook',
  //       qty: 50,
  //       size: { h: 8.5, w: 11, uom: 'in' },
  //       status: 'A',
  //     },
  //     {
  //       item: 'paper',
  //       qty: 100,
  //       size: { h: 8.5, w: 11, uom: 'in' },
  //       status: 'D',
  //     },
  //     {
  //       item: 'planner',
  //       qty: 75,
  //       size: { h: 22.85, w: 30, uom: 'cm' },
  //       status: 'D',
  //     },
  //     {
  //       item: 'postcard',
  //       qty: 45,
  //       size: { h: 10, w: 15.25, uom: 'cm' },
  //       status: 'A',
  //     },
  //   ];
  //   const inventoryData = await inventory.insertMany(inventoryList);
  //   console.log('result', inventoryData);

  //   const findItem = await inventory.find({ status: 'D' }).toArray();
  //   console.log('result', findItem);

  // Q.5

  //   const findItem = await inventory.find({ status: 'A', qty: 50 }).toArray();
  //   console.log('result', findItem);

  // Q.6 쿼리 $in 사용해보기

  //   const findItem = await inventory
  //     .find({
  //       status: { $in: ['A', 'B'] },
  //     })
  //     .toArray();
  //   console.log('result', findItem);
  //

  // Q.7 $lt

  //   const findItem = await inventory
  //     .find({
  //       status: 'A',
  //       qty: { $lt: 30 },
  //     })
  //     .toArray();
  //   console.log('result', findItem);

  // Q.8. $or

  //   const findItem = await inventory
  //     .find({
  //       $or: [{ status: 'A' }, { qty: { $lt: 30 } }],
  //     })
  //     .toArray();
  //   console.log('result', findItem);

  // Q.9 nested field

  //   const findItem = await inventory.find({ 'size.uom': 'in' }).toArray();
  //   console.log('result', findItem);

  // Q.10

  //   const findItem = await inventory.find({ 'size.h': { $gt: 10 } }).toArray();
  //   console.log('result', findItem);

  // Q.11 updateOne

  //   const studentList = [
  //     {
  //       _id: 1,
  //       test1: 95,
  //       test2: 92,
  //       test3: 90,
  //       modified: new Date('01/05/2020'),
  //     },
  //     {
  //       _id: 2,
  //       test1: 98,
  //       test2: 100,
  //       test3: 102,
  //       modified: new Date('01/05/2020'),
  //     },
  //     {
  //       _id: 3,
  //       test1: 95,
  //       test2: 110,
  //       modified: new Date('01/04/2020'),
  //     },
  //   ];
  //   const studentData = await students.insertMany(studentList);
  //   console.log('result', studentData);
  //   const updateStudent = await students.updateOne(
  //     { _id: 3 },
  //     { $set: { test3: 98 } },
  //   );
  //   console.log('result', updateStudent);

  // Q.12 updateMany

  //   const updateAll = await students.updateMany({}, [
  //     { $set: { test1: 0, status: 'modified' } },
  //   ]);
  //   console.log('result', updateAll);

  // Q.13 deleteOne
  //   const deleteStu = await students.deleteOne({ test2: 92 });
  //   console.log('result', deleteStu);

  // Q.14 deleteMany

  const deleteAll = await students.deleteMany({ test1: 0 });
  console.log('result', deleteAll);
}

run();
