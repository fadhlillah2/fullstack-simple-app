import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', '12345678', {
  host: "localhost",
  dialect: "mysql"
});

// Define your models here

// // Example model
// const User = db.define('User', {
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// Auto DDL code
async function syncDatabase() {
  try {
    // Sync all models with the database
    await db.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}

// Call the auto DDL function
syncDatabase();

export default db;
