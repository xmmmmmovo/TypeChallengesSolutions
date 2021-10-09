type Last<T extends any[]> = T['length'] extends 0 ? never : T[T['length']]
