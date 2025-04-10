function calculateParkingFee(vehicleType, duration) {
 
    const totalHours = Math.ceil(duration);
  
 
    const pricing = {
      car: {
        firstHour: 5000,
        nextHour: 3000,
        extraCharge: 50000
      },
      bike: {
        firstHour: 2000,
        nextHour: 1000,
        extraCharge: 20000
      }
    };
  
    
    const type = vehicleType.toLowerCase();
  
   
    if (!pricing[type]) {
      return "Invalid vehicle type.";
    }
  
    
    let total = pricing[type].firstHour;
  
  
    if (totalHours > 1) {
      total += (totalHours - 1) * pricing[type].nextHour;
    }
  
 
    if (totalHours > 24) {
      total += pricing[type].extraCharge;
    }
  
    return `Rp ${total.toLocaleString('id-ID')}`;
  }
  

  
  console.log(calculateParkingFee("car", 3));    
  console.log(calculateParkingFee("bike", 1));    
  console.log(calculateParkingFee("car", 27));    
  
  module.exports = calculateParkingFee;