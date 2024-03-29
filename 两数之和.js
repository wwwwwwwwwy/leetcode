/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 先取出所有相同的值及其索引
    var hash = nums.reduce((con, item, index) => {
        //  如果大于直接跳出
        if (con[item] != undefined) {
            con[item].push(index)
        } else {
            con[item] = [index];
        }
        return con;
    }, {})
    return nums.reduce((con, num, index) => {
        // 取余
        hash[num].shift();
        var leave = target - num;
        if (hash[leave] && hash[leave].length) {
            con.push(index);
            con.push(hash[leave].shift());
        }
        return con;
    }, []);
};

twoSum([-3, 4, 3, 90], 0)