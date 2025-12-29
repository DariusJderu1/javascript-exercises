const removeFromArray = function(arr, ...elementsToRemove) {

    for(let el of elementsToRemove)
        for(let i = 0; i < arr.length; ++i) {
            
            if(arr[i] === el) {

                arr.splice(i,1);
                --i;
            }
        }
         
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
