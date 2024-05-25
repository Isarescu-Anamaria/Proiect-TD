import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'


const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ana1107",
    database: "dbcameras"
})

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=> {
    res.json("Hello this is the backend")
})

app.get("/cameras",(req,res)=>{
    const query = "SELECT * FROM cameras"
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/cameras",(req, res) => {
    console.log(req.body)
    const q = "INSERT INTO cameras (`model`, `focus_mode`, `resolution`, `iso`, `dispaly`, `picture`) VALUES (?)";
    const values = [
        req.body.model,
        req.body.focus_mode,
        req.body.resolution,
        req.body.iso,
        req.body.dispaly,
        req.body.picture
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Camera has been created successfully.");
    });
});

app.delete("/cameras/:id", (req,res)=>{
    const cameraId = req.params.id;
    const q = "DELETE FROM cameras WHERE id = ?"

    db.query(q,[cameraId], (err,data)=>{
        if (err) {
            return res.json(err);
        }
        return res.json("Camera has been deleted successfully.");
    })
})


app.put("/cameras/:id", (req,res)=>{
    const cameraId = req.params.id;
    const q = "UPDATE cameras SET `model` = ?,`focus_mode` = ?,`resolution` = ?,`iso` = ?,`dispaly` = ?,`picture` = ? WHERE id = ?";

    const values = [
        req.body.model,
        req.body.focus_mode,
        req.body.resolution,
        req.body.iso,
        req.body.dispaly,
        req.body.picture
    ];

    db.query(q,[...values,cameraId], (err,data)=>{
        if (err) {
            return res.json(err);
        }
        return res.json("Camera has been updated successfully.");
    })
})




app.listen(8800,()=> {
    console.log("Connected to backend!")
})

