const { db } = require("../../database");

const getSales = async (sale) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM voucher`;
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

const getSalesByUser = async (user) => {
  try {
    //var string = user.type == "0" ? `id = ${user.id}` : `id = ${user.id}`;
    var string = `id = ${user.id}`;
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM voucher WHERE ${string}`;
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

const createSale = async (sale) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO sale SET ?`;
      db.query(sql, sale, (err, rows) => {
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

const deleteSale = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM voucher WHERE (id=${id})`;
      db.query(sql, material, (err, rows) => {
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
  getSales,
  getSalesByUser,
  createSale,
  deleteSale,
};
