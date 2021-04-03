import { readFile } from "fs";

console.log("1");

readFile("2003.json", function(err, data){

    console.log("2");
        if(err){
            console.log(err);
        } else{

        }
});

console.log("3");