import {promises as fs, read} from 'fs';

notaTotal('Fórum','01 - JavaScript');

async function notaTotal(gradeType, gradeSubject){
    const data = JSON.parse( await fs.readFile("grades.json"));
    const readStudentSubjectValue = data.grades.map ( grades=>{ 
        return { 
            student: grades.student,
            subject: grades.subject,
            type: grades.type,
            value: grades.value

        }
    });
  
   
 
    for(let student in readStudentSubjectValue){

        const grade = readStudentSubjectValue[student];
     
        
        if(grade.type === gradeType && grade.subject === gradeSubject){
            
            grade.value.sort(function(a, b){console.log(a-b)});
        }  

    }

    
    

}