const accountId=144553
let accountEmail="gayatri@gmail.com"
var accountPassword= "1234"
accountCity="Palus"
let accountState;

// accountId=2  this is not allowed because const cannot allowed to change value.

accountEmail="hc@hc.com"
accountPassword="4321"
accountCity="Sangli"

console.log(accountId);
/*
    prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])