const Sequelize = require("sequelize");
const sequelize = new Sequelize("user", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const user = sequelize.define(
  "user",
  {
    EID: {
      type: Sequelize.STRING,
    },
    PASSWORD: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true , timestamps: false}
);
sequelize.sync()
module.exports=user
