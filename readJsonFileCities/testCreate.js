import {promises as fs} from 'fs';



// writeJson('MG');

export async function writeJson(nome){
    try{


        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = {
            carros : arrayCarros
        };

      
        await fs.writeFile(JSON.stringify(nome)+ ".json", JSON.stringify(obj));;


    }catch(err){
        console.log(err);
    }
}

