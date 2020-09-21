const { db } = require("../../database");

const getProducts = async () => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM product`;
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

const createProducts = async (product) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO product (name, idCategory, dateCreated) VALUES (${name}, ${idCategory}, ${dateCreated}, ${total_product})`;
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

const deleteProduct = async (product) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM product WHERE (id=${id})`;
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

const getProductsByCategory = async (name) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM product WHERE name = ${name}`;
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

const getProductsBySpec = async (name) => {
  try {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM product WHERE name = ${name}`;
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
  getProducts,
  createProducts,
  deleteProduct,
  getProductsByCategory,
  getProductsBySpec,
};
