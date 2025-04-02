function Calculator(n1,n2,operator){
 switch(operator){
    case'+':
     return n1+n2;

    case'-':
     return n1-n2;
    
    case'*':
     return n1*n2;
    
    case'/':    
     return n2 !== 0 ? n1 / n2:  'Cannot divide by zero';

     default :
      return 'Invalid operator'; // Handle invalid operator
 }
   
}




