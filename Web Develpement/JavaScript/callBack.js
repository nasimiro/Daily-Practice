function washHand() {
    console.log('Please wash your hand'); 
}

function takeShower(){
    console.log('Take Shower');
    return 'Take Shower';
}

function doAnything(){
    console.log('Do anything whatever you want');
}

function callBack(name,age,task) {
    console.log('Hello! ',name)
    console.log('Are you now ',age,' years old?')
    console.log('Please',task);
    task( );
    
}

callBack('Anik',25,doAnything)
callBack('Nahid',26,takeShower)