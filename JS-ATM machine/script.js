function machine(request) {

    const balance = 2000;
  
    if (request > balance) {
      return "Not enough money";
    }
  
    return `You have withdrawn ${request} and your balance is ${balance - request}`;
  }
  
  console.log(machine(450));
  console.log(machine(2500));
  