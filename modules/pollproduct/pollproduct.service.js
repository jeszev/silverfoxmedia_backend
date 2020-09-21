const { db } = require("../../database");

const getPollProduct = async () => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM pollproduct`;
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

const createPollProduct = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO pollproduct SET ?`;
      db.query(sql, pollproduct, (err, rows) => {
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

const deletePollProduct = async (pollproduct) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM pollproduct WHERE (id=${id})`;
      db.query(sql, pollproduct, (err, rows) => {
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

const getPollProductById = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM pollproduct WHERE idProduct = ${idProduct}`;
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

module.exports = {
  getPollProduct,
  createPollProduct,
  getPollProductById,
};
