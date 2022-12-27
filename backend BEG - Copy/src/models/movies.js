const db = require('../configs/db')
const models = {}



models.getData = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM movie ORDER BY id DESC`)
        .then((res)=>{
            resolve(res.rows)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

models.addData = function ({title, genre, directed_by, synopsis}) {
   return new Promise ((resolve, reject) => {
    db.query(` insert into movie (title, genre, directed_by, synopsis) values ('${title}', '${genre}', '${directed_by}', '${synopsis}') returning * ;
    `)
     .then((res) => {
        resolve(res.rows)
     }) 
     .catch((err) => {
        reject(err)
     })
   })
}

models.updateData = function ({title, genre, directed_by, synopsis,id}) {
   return new Promise ((resolve, reject) => {
     db.query(`UPDATE movie SET title= $1, genre= $2, directed_by= $3, synopsis= $4, update_at= now()
     WHERE id= $5 returning *;`
     ,
     [title, genre, directed_by, synopsis,id])
     .then((res) => {
        resolve(res.rows)
     }) .catch((err) => {
        reject(err)
     })
   })
}

models.deleteData = function (id) {
   return new Promise ((resolve, reject) => {
     db.query('DELETE FROM movie WHERE id = $1', [id])

     .then((res) => {
        resolve(res.rows)
     }) .catch((err) => {
        reject(err)
     })
   })
}

module.exports = models