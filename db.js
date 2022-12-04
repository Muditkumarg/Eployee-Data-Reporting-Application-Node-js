const mongoose = require('mongoose');


mongoose.connect(
    "mongodb://127.0.0.1:27017/registrationData",
    { useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
      console.log("Database connected");
    }).catch(error => console.log("Could not connect to mongo db " + error));

    module.exports = mongoose;
