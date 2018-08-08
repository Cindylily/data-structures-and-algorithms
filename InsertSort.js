/**插入排序法思想：一个待排序列，一个等待插入的有序序列，
 * 依次从待排序列里拿出数据，放在有序序列里，
 * 每次拿出来的数据都要和之前拿出来的数据进行比较，来找到自己的位置
 * 时间复杂度最坏是O(n^2)，最好是O(n)
 */

function InsertSort(arr){
    if(arr.length > 0){
        var len = arr.length;
        for(var i = 1; i < len; i++){
            var tmp = arr[i];
            var j = i;
            for(; j>0 && arr[j-1] > tmp; j--){
                arr[j] = arr[j-1];
            }
            arr[j] = tmp;
        }
    }
}

var arr = [4,2,6,8,29];
InsertSort(arr);
console.log(arr);