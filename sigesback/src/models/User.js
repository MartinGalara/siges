const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false,
        }
    )
}
