const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('webuser', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "User"
        }
    },
        {
            timestamps: false,
        }
    )
}
