var conn = require('./db');

module.exports = {

  save(item, ordem) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_itens_produtos(item_prod, ordem_prod)
VALUES(?, ?)`, [
        item, ordem
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getOrdens(ordem) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_itens_produtos WHERE ordem_prod = ?
      `, [
        ordem
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteItem(item) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_itens_produtos WHERE item_prod = ?
      `, [
        item
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};