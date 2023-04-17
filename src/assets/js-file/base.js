// careers page deatil start

const divcontainer = document.querySelector('#hdetails');
let isclicked =true;

let showOrHide = function(){
    if(isclicked){
        divcontainer.style.display ='block';
        isclicked =false;
    }
    else{
        divcontainer.style.display ='none';
        isclicked =true;
    }
    
}

// careers page deatil end