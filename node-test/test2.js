const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');
const validator = require('validator');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // if (!value.includes('@')) throw new Error('This is not an Email !');
        if (!validator.isEmail(value))
          throw new Error('This is not an Email !!');
      },
    },
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
  name: '김수',
  password: '            abcd',
  email: 'su@gmail.com',
});

// 함수 밖에 나와 있을 땐 async await 말고 then 을 쓰자 !
// save를 했다면 콘솔 출력하자는 뜻
// newUser.save().then((value) => console.log('value is', value));

User.find({ name: '김수' })
  .select('name -_id')
  .then((value) => console.log('all data', value));
