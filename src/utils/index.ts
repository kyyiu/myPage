
/**
 * 获取某个区间的随机整数
 * @param min 得到的最小随机整数
 * @param max 得到的最大随机整数
 * @returns 
 * @example
 * getRangdomFrom(2,5)
 * 返回[2.5]的随机整数
 */
export const getRandomFrom = (min: number, max: number) => {
  const randomRange = max - min + 1
  return Math.floor(Math.random() * randomRange + min) 
}