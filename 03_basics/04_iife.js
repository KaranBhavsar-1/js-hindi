// immediately invoke function Expression(IIFE)

//pu the function in a block and run it automatically
(function chai(){
    //nammed IIFE
    console.log("DB connected")
})();        // this "()" run the function immediately and ";" to end the execution
// chai()

//Un-named IIFE
( () => {console.log("DB connected two")}) ();

//un-nammed IIFE with parameters
( (name) => {console.log(`the name is ${name}`)}) ("gaitonde");
