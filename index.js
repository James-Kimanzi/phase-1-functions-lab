 function distanceFromHqInBlocks (start){
    const hq = 42;
    const distanceInBlocks = Math.abs(start - hq);
    return distanceInBlocks;
  }


  function distanceFromHqInFeet (start){
    const hq = 42;
    const distanceInFeet = Math.abs(start - hq) * 264;
    return distanceInFeet;
  }
  

  function distanceTravelledInFeet (start, destination){
      return distanceTravelledInFeet = Math.abs(start - destination) * 264;
  
  }
 

function calculatesFarePrice(start, destination){
  const distanceTravelledInFeet = Math.abs(start - destination) * 264;
  if (distanceTravelledInFeet <= 400) {
    return 0;
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <=2000) {
    return (distanceTravelledInFeet - 400) * 0.02;
  } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
    return 25;
  } else if (distanceTravelledInFeet > 2500) {
    return 'cannot travel that far'
  }  
}

 






// Code your solution in this file!
