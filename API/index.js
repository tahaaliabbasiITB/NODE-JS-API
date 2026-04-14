const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized : false
    }
});

app.get('/',async(req,res)=>{
    try{
        res.json("AOA, MUBARAK HO...............!");

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/regions',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/countries',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/Locations',async(req,res)=>{
    try{
        const result = await pool.query('select * from Locations');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/jobs',async(req,res)=>{
    try{
        const result = await pool.query('select * from jobs');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/departments',async(req,res)=>{
    try{
        const result = await pool.query('select * from departments');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/employees/total',async(req,res)=>{
    try{
        const result = await pool.query('select sum(employee_id) from employees');
        res.json(result.rows);

    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
})