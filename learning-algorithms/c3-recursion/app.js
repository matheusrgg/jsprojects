function countdown(i) {
    console.log(i);
   
    if( i <= 0){
      countdown(i - 1)
    }
  
  countdown(10);