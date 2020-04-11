import HashMap from './data-structure/hashmap'

export type Dist = HashMap<string, number>

export type Path = HashMap<string, string|null>

export type Visited = HashMap<string, boolean>