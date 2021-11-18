/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    /**
     * 1. 确定含义
     *    dp[i][j] 表示第i行j列从左上到右下的最短距离和
     * 
     * 2. 确定推导公式
     *    最终到达dp[i][j]这个点，可能是从上边/左边的单元格过来。
     *    由于，本题目是要求最短的路径距离之和，
     *    所以dp[i][j] 和 dp[i-1][j]、dp[i][j-1]存在以下关系:
     *    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
     *    （ grid[i][j]为当前单元格的值 ）
     *    
     * 3. 确定基础值 (只能向左或向下移动)
     *    起始单元格的值, dp[0][0]
     *    x轴坐标为0的值
     *    y轴坐标为0的值
     */
  
    const dp = new Array(grid.length).fill([])
  
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        // 计算基础值
        if(i === 0 && j == 0){
          dp[0][0] = grid[i][j]
          continue
        }
        if(i === 0){
          dp[0][j] = dp[0][j - 1] + grid[i][j]
          continue
        }
        if(j === 0){
          dp[i][0] = dp[i - 1][0] + grid[i][j]
          continue
        }
  
        // 计算结果
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
      }
    }
  
    return dp[grid.length - 1][dp[grid.length - 1].length - 1]
  };