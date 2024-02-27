const connection = require("../../../../config/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM users WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.createUsers = async (req, res) => {
  const { full_name, phone, addres, email, rol, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users (full_name, phone, addres, email, rol, password) VALUES ('${full_name}', '${phone}', '${addres}', '${email}', '${rol}', '${passwordHash}')`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.updateUsers = (req, res) => {
  const { id, full_name, phone, addres, email, rol, password } = req.body;
  const sql = `UPDATE users SET full_name = '${full_name}', phone = '${phone}', addres = '${addres}', email = '${email}', rol = '${rol}', password = '${password}' WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.deleteUsers = (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM users WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("USERS_DELETED_SUCCESSFULLY");
    }
  });
};

exports.authUsers = async (req, res) => {
  const { email, password: inPassword } = req.body;
  const credentials = {
    email: email,
    password: inPassword
  };
  const sql = `SELECT * FROM users WHERE email = '${email}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.jason(error);
    } else {
      if (rows.length) {
        const { password } = rows[0];
        const passwordMatch = bcrypt.compare(inPassword, password);
        const token = jwt.sign(credentials, 'hospitpets')
        if (passwordMatch) {
          res.json({
            name: rows[0].full_name,
            email: rows[0].email,
            token: token
          });
        } else {
          res.json("ERROR_PASSWORD");
        }
        res.json(rows);
      } else {
        res.json("USER_DOES_NOT_EXIST");
      }
    }
  });
};
