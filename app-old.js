 const http = require('node:http');

 const server = http.createServer((req,res) => {
   //  console.log(req.headers);
   //  res.writeHead(200,{'Content-Type':'application/json'})      //  estos son los headers van despues en coma con el status donde especifico que typo de dato estoy enviado de respuesta a mi cliente.
   // res.setHeader('Content-Disposition','attachmen; filename=Lista.csv')  // le dice al navegador que va a ser un archivo descargable  y lista.csn sera el nombre del archivo.
   // res.writeHead(200,{'Content-Type':'application/csv'})

   //  const persona = {
   //    id:1,
   //    nombre:'fernando'
   //  }

   //  res.write(JSON.stringify(persona))

   res.write('hola mundo');
   // res.write('1,Fernando\n');
   // res.write('2,Maria\n');
   // res.write('3,Juan\n');
   // res.write('4,Pedro\n');
 
    res.end()

 
 })

 server.listen(9080)

 console.log('escuchando en el puerto' , 9080)