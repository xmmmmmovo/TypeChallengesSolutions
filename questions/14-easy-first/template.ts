// 判断是否是数值的扩展
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
