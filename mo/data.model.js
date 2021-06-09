const { SchemaType, Schema } = require("mongoose");

module.exports = mongoose => {
  const Datas = mongoose.model(
    "datas",
    mongoose.Schema(
      {
          Data:Object,
          
      },
      {
        timestamps   : true
      }
    )
  );

  return Datas;
};