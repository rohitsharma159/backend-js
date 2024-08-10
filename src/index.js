import dotenv from "dotenv"
import ConnectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


ConnectDB();

.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${
            process.env.PORT || 8000
        }`);
    })
})
.catch((err)=>{
    console.log("Error connecting to database", err)
})






/*
import express from "express";
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/$
            {DB_NAME}`)
            app.on("error", (error)=>{
                console.error("error", error);
                throw error
            })
            app.listen(process.env.PORT, ()=>{
                console.log(`Server is running on port ${process.env.PORT}`);
            });

    } catch (error) {
        console.error("ERROR", error)
        throw err
        
    }
                
})()

*/