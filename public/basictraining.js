var arr=[1,2,3]
isUnifom(arr);

function reverse(arr){

    for (let index = arr.length; index >= 0; index--) {
        console.log(arr[index]);
        
    }
}

function isUnifom(arr){
    var uniAttrib;
    arr.forEach(element => {
       for(let i=0; i<arr.length; i++) {
            if (arr[i]===element){
               uniAttrib=true
               console.log(arr[i]," ",element)
            }
            else
               uniAttrib=false
        };
    });
    console.log(uniAttrib)
}