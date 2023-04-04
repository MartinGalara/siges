const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('testing', {
        find: {
            type: DataTypes.STRING,
        },
        replace: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false,
        }
    )
}
