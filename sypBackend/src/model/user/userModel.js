import { DataTypes} from "sequelize";
import { sequelize } from "../../database/index.js";
export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { len: [3, 25] },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {  // ✅ Add this field
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // By default, users are not admins
  },
}, {
  timestamps: true,
  tableName: "users",
});
