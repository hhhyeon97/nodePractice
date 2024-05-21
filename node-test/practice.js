const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('practice');
  const inventory = database.collection('inventory');
  //   const inventoryData = await inventory.insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' },
  //   });
  //   console.log('result', inventoryData);

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

  // Q.6
  //   const findItem = await inventory
  //     .find({
  //       status: { $in: ['A', 'B'] },
  //     })
  //     .toArray();
  //   console.log('result', findItem);
  //

  // Q.7
  //   const findItem = await inventory
  //     .find({
  //       status: 'A',
  //       qty: { $lt: 30 },
  //     })
  //     .toArray();
  //   console.log('result', findItem);

  // Q.8
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

  // Q.11
}

run();
