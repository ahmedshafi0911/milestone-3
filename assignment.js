// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(1000000);
console.log(result);

// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodNeeded = woodCalculator(6, 1, 3);
console.log(woodNeeded);

// brickCalculator



// tinyFriend
function tinyFriend(name){
    var shortest = 'undefined';

for(var i = 0; i < name.length; i++){
    if(typeof name[i] === 'string')
    {    var currentName = name[i];
        if(currentName < shortest) {
            shortest = currentName;
        }
    }

}
 return shortest;
}
var shortestName = tinyFriend(['Akram', 'Shafi', 'Samy', 'Jackie','Brandon']);
console.log(shortestName);