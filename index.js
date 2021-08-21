function receivesAFunction(callback){
    callback();
}

// receivesAFunction = (callback) => { 
//     callback() 
// }

function returnsANamedFunction(){
    return namedFunction
}

// function namedFunction(){

// }

namedFunction = () => {

}

function returnsAnAnonymousFunction(){
       return () => {}
}