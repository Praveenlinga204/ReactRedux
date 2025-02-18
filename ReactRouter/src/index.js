function sayGood(){
    console.log('Good Morning')
}
function greetuser(name,callback){
console.log(`hello ${name}`);
callback()
}
sayGood('Alice',sayGood)