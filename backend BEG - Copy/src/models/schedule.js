const db = require('../configs/db');
const models = {};

models.getData = function () {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM schedules ORDER BY schedules_id ASC')
          .then((data) => {
            resolve(data.rows);
          })
          .catch((err) => {
            reject(err);
          });
      });
};

models.addData = function ({ movie_id, theater, available_seats, start_time, end_time }) {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO schedules
      (movie_id, theater, available_seats, start_time, end_time)
      VALUES($1, $2, $3, $4, $5);
      `,
        [movie_id, theater, available_seats, start_time, end_time]
      )
        .then((data) => {
          resolve('data berhasil disimpan');
        })
        .catch((ers) => {
          reject(ers);
        });
    });
  };

  models.updateData = function ({ schedules_id, theater, available_seats, start_time, end_time }) {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE public.schedules
          SET theater=$2, available_seats=$3, start_time=$4, end_time= $5
          WHERE schedules_id=$1;
          `,
        [schedules_id, theater, available_seats, start_time, end_time]
      )
        .then((data) => {
          resolve('Data Berhasil Disimpan');
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  models.deleteData = function ({ movie_id }) {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM schedules
          WHERE movie_id=$1;
          `,
        [movie_title]
      )
        .then((data) => {
          resolve('Data Berhasil Disimpan');
        })
        .catch((err) => {
          reject(err);
        });
    });
  };