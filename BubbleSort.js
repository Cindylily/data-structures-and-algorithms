/**冒泡排序
 * 比较两个相邻的元素，前一个比后一个大，则交换位置，时间复杂度是O（n^2）
 */

//此冒泡排序是从小到大排序
function BubbleSortPos(arr) {
    var len = arr.length;
    if(len>0) {
        for (var i = 1; i < len; i++) {
            for (var j = 0; j < len - i; j++) {
                if (arr[j] > arr[j+1]){
                    var tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }
    }
}

var arr = [1,6,3,9,10];
BubbleSortPos(arr)
console.log(arr);

//此冒泡是从大到小排序
function BubbleSortDis(arr) {
    var len = arr.length;
    if(len>0){
        for(var i = len-1; i >=0; i--){
            for(var j = len - 1; j > len - 1 -i; j--){
                if(arr[j] > arr[j-1]){
                    var tmp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = tmp;
                }
            }
        }
    }
}

BubbleSortDis(arr);
console.log(arr);

