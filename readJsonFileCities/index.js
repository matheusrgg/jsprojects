import {promises as fs, writeFile} from 'fs';

import { writeJson } from './testCreate.js'

writeReadJson();



async function writeReadJson(){
    try{
        const readEstadosFile = JSON.parse(await fs.readFile("estados.json", "utf-8"));

        const nomeEstado = readEstadosFile.map(estado=>{ return{ sigla: estado.Sigla }});

        // console.log(nomeEstado);

        for(let estado in nomeEstado){
            writeJson(nomeEstado[estado]);
        }



        
    }catch(err){
        console.log(err);
    }
}



//  function createJsonFile(sigla){
//      fs.writeFile(sigla + ".json");
// }

    
         