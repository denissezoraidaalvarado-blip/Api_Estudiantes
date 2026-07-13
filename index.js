//Mencionando el modulo express para nuestro proyecto
//Por: Denisse Alvarado
const express = require('express');

// nuestro objeeto central (global) que se utilizará en el proyecto
//(rutas, funciones, configuraciones)
const app=express();

//simulando una base de datos de estudiantes
const estudiantes=[
    {id:1, nombre:'Denisse', apellido:'Alvarado', edad:20, correo:"denisse@example.com"},
    {id:2, nombre:'Juan', apellido:'Perez', edad:22, correo:"juan@example.com"},
    {id:3, nombre:'Maria', apellido:'Gonzalez', edad:21, correo:"maria@example.com"}
    {id:4, nombre:'Carlos', apellido:'Rodriguez', edad:23, correo:"carlos@example.com"}
]

// servidor =localhost 3000
// servidor=localhost
app.listen(3000,()=>{
    console.log('Hola, estas usando Servidor Express');});

    // creando enrutamiento para la API
    // *(primer parámetro)
    // *(segundo parámetro) res=response (lo que se devuelve al cliente) req=request (lo que el cliente envía al servidor)
  
    // creando la ruta principal (petición HTTP GET, POST, PUT, DELETE, PATH)


    app.get('/',(req,res)=>{
        //codigo de la función
        res.send('Hola, estas usando Servidor Express_Api Estudiantes')
    })

    // ruta para obtener todos los estudiantes (segundo endpoint)
    app.get('/estudiantes',(req,res)=>{
        //codigo
        res.send(estudiantes)
    })