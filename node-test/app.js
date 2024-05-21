const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('user');

  //   const userData = await users.insertOne({ name: 'noona', age: 17 });
  //   console.log('result', userData);

  //   const userList = [
  //     { name: '철수', age: 30 },
  //     { name: 'kiki', age: 25 },
  //   ];

  //   const userListResult = await users.insertMany(userList);
  //   console.log('result', userListResult);

  //   const findUser = await users.findOne({ age: { $gt: 20 } });
  //   console.log('result', findUser);

  //   const updateUser = await users.updateOne(
  //     { name: 'noona' },
  //     { $set: { age: 18 } },
  //   );
  //   console.log('result', updateUser);

  //   const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  //   console.log('delete!', deleteUsers);

  const userData = await users
    .find({ name: 'noona' })
    .project({ name: 1 })
    .toArray();
  console.log('userdata', userData);
}

run();
