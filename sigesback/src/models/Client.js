const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('client', {
        client: {
            type: DataTypes.STRING,
        },
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
