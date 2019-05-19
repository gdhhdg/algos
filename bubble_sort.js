/**
 * Created by gunnerhatmaker on 5/19/19.
 */
let array1 = [4,11,2,47,7,34,65,69,9,37];
let array2 = [74,8,15,25,26,40,25,34,42,71,1,18];
let array3 = [1,2,12,62,75,77,6,13,72,77,2,62,69,70];
//smallest to largest
bubble_sort = (array) => {
    for (let x = array.length; x >=0; x++){
        let i = 0;
        while (i <= array.length){
            if (array[i] > array[i+1]){
                let bigger_index = i;
                let pulled = array[i];
                array.splice(i,1);
                array.splice(bigger_index + 1 , 0, pulled);
                console.log(array);
                i++;
            }
            else {
                i++;
            }
        };
    }
    console.log(array);
};

//largest to smallest
bubble_sort_reverse = (array) => {
    for (let x = array.length; x >=0; x++){
        let i = 0;
        while (i <= array.length){
            if (array[i] < array[i+1]){
                let bigger_index = i;
                let pulled = array[i];
                array.splice(i,1);
                array.splice(bigger_index + 1 , 0, pulled);
                console.log(array);
                i++;
            }
            else {
                i++;
            }
        };
    }
    console.log(array);
};

bubble_sort_reverse(array3);
