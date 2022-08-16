function scuberGreetingForFeet(feet){
  // Write your code here!
  let answer;
  if (feet <= 400){
    answer = "This one is on me!";
  }
  else if(feet>2500){
    answer = "No can do.";
  }
  else if(feet>2000){
    answer = "I will gladly take your thirty bucks.";
  }
  return answer;
}
 

let city ='';
function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }
  else if(city !== 'NYC'){
    return 'No go.';
  }

}
let tip ='';
function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === 'generous'){
    return 'Thank you so much.';
  } 
  else if (tip === 'not as generous'){
    return 'Thank you.';
  }
  else{return 'Bye.';
  }
} 