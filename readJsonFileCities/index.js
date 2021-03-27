import {promises as fs} from 'fs';

import { writeJson } from './testCreate.js'

writeReadJson();



async function writeReadJson(){
    try{
        const readEstadosFile = JSON.parse( await fs.readFile("estados.json"));
        const nomeEstado = readEstadosFile.map(estado=>{ 
            return{ sigla: estado.Sigla }
        });

        


        

        for(let estado in nomeEstado){
            writeJson(nomeEstado[estado]);
            // console.log(nomeEstado[estado]);
        }

   
        
        
    }catch(err){
        console.log(err);
    }
}

