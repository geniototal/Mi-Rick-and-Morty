const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      name: {
         type:DataTypes.STRING,
         allowNull: false
   },
   status: {
      type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
      defaultValue: 'Alive'
   },
   gender: {
      type: DataTypes.ENUM('Male', 'Female', 'unknown', 'Genderless'),
   },
   origin: {
      type:DataTypes.STRING,
      allowNull: true
   },
   image: {
      type:DataTypes.STRING,
      allowNull: false
   },
   species: {
      type:DataTypes.STRING,
      
   }
   }, { timestamps: false });
};
