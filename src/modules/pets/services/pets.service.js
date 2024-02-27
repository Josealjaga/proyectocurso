const connection = require("../../../../config/connection");

exports.getAllPets = (req, res) => {
  const sql = "SELECT * FROM pets";
  connection.query(sql, (error, rows) => {
    if (error) {
      res(error);
    } else {
      res.json(rows);
    }
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM pets WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res(error);
    } else {
      res.json(rows);
    }
  });
};

exports.createPets = (req, res) => {
  const { name, type, race, age, weight } = req.body;
  const sql = `INSERT INTO pets (name, type, race, age, weight) VALUES ('${name}', '${type}', '${race}', '${age}', '${weight}')`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.jason(error);
    } else {
      res.json(rows);
    }
  });
};

exports.updatePets = (req, res) => {
  const { id, name, type, race, age, weight } = req.body;
  const sql = `UPDATE pets SET name = '${name}', type = '${type}', race = '${race}', age = '${age}', weight = '${weight}' WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res(error);
    } else {
      res.json(rows);
    }
  });
};

exports.deletePets = (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM pets WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res(error);
    } else {
      res.json("PETS_DELETED_SUCCESSFULLY");
    }
  });
};
