import {promises as fs, writeFile} from 'fs';

writeReadJson();



async function writeReadJson(){
    try{
        const readEstadosFile = JSON.parse(await fs.readFile("estados.json"));
     


        const nomeEstado = readEstadosFile.map(estado=>{
            return{
                sigla: estado.Sigla
            }
          
        });


   
        nomeEstado.forEach(createJsonFile(nomeEstado.sigla));
       


        
        
    }catch(err){
        console.log(err);
    }
}



async function createJsonFile(sigla){
    await fs.writeFile(sigla + ".json");
}

    
            // for ( let i = 0 ; i < nomeEstado ; i++){
            //     console.log(i);
            // }
    
            //to na dúvida aqui qual método utilizar
            //faria com forEach a interação e pra casa nome geraria um
            //arquivo.json