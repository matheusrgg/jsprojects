import {promises as fs} from 'fs';



// writeJson('MG');

export async function writeJson(nome){
    try{


       

 

        await fs.writeFile(GetPropertyValue(nome, "sigla") + ".json")
       

        function GetPropertyValue(obj1, dataToRetrieve) {
            return dataToRetrieve
              .split('.') // split string based on `.`
              .reduce(function(accumulator, current) {
                return accumulator && accumulator[current]; // get inner property if `accumulator` is defined else get `accumulator` and return
              }, obj1) // set initial value as object
        }

    }catch(err){
        console.log(err);
    }
}

