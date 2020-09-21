const { db } = require("../../database");

const getUser = async (user) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM user`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log("ERROR DB", err);
        } else {
          return resolve(rows);
        }
      });
    });
  } catch (err) {
    if (!(err instanceof DatasourceError)) {
      throw new ServiceError(err);
    }
    throw err;
  }
};

const getUserById = async (user) => {
  try {
    //var string = user.type == "0" ? `id = ${user.id}` : `id = ${user.id}`;
    var string = `id = ${user.id}`;
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM user WHERE ${string}`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log("ERROR DB", err);
        } else {
          return resolve(rows);
        }
      });
    });
  } catch (err) {
    if (!(err instanceof DatasourceError)) {
      throw new ServiceError(err);
    }
    throw err;
  }
};

const createUser = async (user) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO user SET ?`;
      db.query(sql, user, (err, rows) => {
        if (err) {
          console.log("ERROR DB", err);
        } else {
          return resolve(rows);
        }
      });
    });
  } catch (err) {
    if (!(err instanceof DatasourceError)) {
      throw new ServiceError(err);
    }
    throw err;
  }
};

const deleteUser = async (user) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM user WHERE (id = ${id})`;
      db.query(sql, user, (err, rows) => {
        if (err) {
          console.log("ERROR DB", err);
        } else {
          return resolve(rows);
        }
      });
    });
  } catch (err) {
    if (!(err instanceof DatasourceError)) {
      throw new ServiceError(err);
    }
    throw err;
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
};
