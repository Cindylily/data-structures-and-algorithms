/**快排是对冒泡排序的一种改进的算法
 * 首先找一个基准数，这个数一般是中间数或者是首尾数
 * 将这个基准数与末尾的数进行比较，比基准数大的数移动到右边，小的移动到左边。
 * 整个排序过程可以递归进行，会使数据变成有序的数列。
 */


function QuickSort(arr, begin, end) {
    if(begin < end) {
        var key = arr[begin];
        var i = begin;
        var j = end;

        while (i < j) {
            while (i < j && arr[j] > key) {
                j--;
            }
            if (i < j) {
                arr[i] = arr[j];
                i++;
            }
            while (i < j && arr[i] < key) {
                i++;
            }
            if (i < j) {
                arr[j] = arr[i];
                j--;
            }
        }
        arr[i] = key;

        //递归
        QuickSort(arr, begin, i - 1);
        QuickSort(arr, i + 1, end);
    }
}

//实例调用
var arr = [16,3,8,0,2,5,30];
QuickSort(arr,0,6);
console.log(arr);