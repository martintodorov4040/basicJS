function namesFirstLast(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
      return [];
    }

    const names = [];
    for (let i = 0; i < firstNames.length; i++) {
      names.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }

    return names;
  }

  let firstNames = ['Bob', 'Jill'];
let lastNames = ['Gregory', 'Wurtz'];
console.log(namesFirstLast(firstNames, lastNames));