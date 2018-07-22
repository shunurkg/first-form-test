import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcServiceService {

  constructor() { }

  calculate(number){
    if(number%2==0)
    return number%2;
     else
    return number%2;
  }

    fizzBuzz(num) {
    var ans=" ";
    for(var i=1;i<=num;i++)
    {
        if(i % 3 == 0 && i % 5 !=0 )
            ans+=i+"Fizz ";
        else if(i % 5 == 0 && i % 3 !=0)
            ans+=i+"Buzz ";
        else if(i % 3 == 0 && i % 5 == 0)
            ans+=i+"FizzBuzz ";
        else 
            ans+=i+"not divisible ";    
    }
    return ans;
    
}
repeatValues(str)
{
    var a = str.split(",").sort();
    var resultString="", count = 0,i,j,t,u;
    for(i=0;i<a.length-1;i++)
    {
        count = 0;
        t = parseInt(a[i]);
        for(j=i+1;j<a.length;j++)
        {
            u = parseInt(a[j])
            if(t == u)
                count++;
            else 
                break;
        }
        if(count>0)        
            resultString = resultString+" "+ t;        
    }
    return resultString;
}
}
