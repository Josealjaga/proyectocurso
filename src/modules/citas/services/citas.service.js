const connection = require("../../../../config/connection");

exports.getAllCitas = (req, res) => {
  const sql = "SELECT * FROM citas";
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
  const sql = `SELECT * FROM citas WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.createCitas = (req, res) => {
  const { date, hour, doctor } = req.body;
  const sql = `INSERT INTO citas (date, hour, doctor) VALUES ('${date}', '${hour}', '${doctor}')`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.updateCitas = (req, res) => {
  const { id, date, hour, doctor } = req.body;
  const sql = `UPDATE citas SET date = '${date}', hour = '${hour}', doctor = '${doctor}' WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.deleteCitas = (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM citas WHERE id = '${id}'`;
  connection.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("CITA_DELETED_SUCCESSFULLY");
    }
  });
};
