const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('computer', {
        alias: {
            type: DataTypes.STRING,
        },
        teamviewer_id: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false,
        }
    )
}
