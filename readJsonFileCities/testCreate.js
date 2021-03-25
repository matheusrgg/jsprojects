import {promises as fs} from 'fs';


// writeJson('MG');

export async function writeJson(nome){
    try{
        await fs.writeFile(nome + ".json", "blablabla")


    }catch(err){
        console.log(err);
    }
}


module.exports = {writeJson};