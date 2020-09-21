const { db } = require("../../database");
const md5 = require("md5");

const hashPassword = (password) => {
  return md5(`POWER${password}`);
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user WHERE email = "${email}"`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log("ERROR DB", err);
      } else {
        return resolve(rows);
      }
    });
  });
};

const signup = async (user) => {
  try {
    if (!user.email || !user.password)
      return {
        error: "messages.GLOBAL.ERROR",
        msg: "messages.AUTH.INVALID_AUTH",
      };

    const emailRegistered = await findUserByEmail(user.email);
    if (emailRegistered.length != 0)
      return {
        error: "messages.GLOBAL.ERROR",
        msg: "messages.AUTH.EMAIL_ALREADY_EXIST",
      };

    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;

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

const login = async (body) => {
  try {
    var data = await findUserByEmail(body.email);
    console.log(data);
    if (data.length == 0)
      return { error: "messages.GLOBAL.ERROR", msg: "messages.USER.NOT_FOUND" };

    var user = data[0];
    var userPassword = user.password;
    var requestHashedPassword = hashPassword(body.password);

    if (userPassword != requestHashedPassword)
      return {
        error: "messages.GLOBAL.ERROR",
        msg: "messages.AUTH.INVALID_PASSWORD",
      };

    return user;
  } catch (err) {
    if (!(err instanceof DatasourceError)) {
      throw new ServiceError(err);
    }
    throw err;
  }
};

module.exports = {
  signup,
  login,
};
