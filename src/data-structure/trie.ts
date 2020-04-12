class Trie {
  private _root: Node

  constructor() {
    this._root = new Node()
  }

  insert (key: string): void {
    let node = this._root

    for (let i = 0; i < key.length; i++) {
      const index = this._getCharIndex(key[i])
      
      if (!node.getIndex(index)) {
        node.setIndex(index, new Node())
      }

      node = node.getIndex(index)
    }

    node.setEndOfWord()
  }

  search (key: string): boolean {
    const node = this.searchPrefix(key)

    return node !== null && node.isEndOfWord()
  }

  searchPrefix (key: string): Node {
    let node = this._root

    for (let i = 0; i < key.length; i++) {
      const index = this._getCharIndex(key[i])
      
      if (node.getIndex(index)) {
        node = node.getIndex(index)
      } else {
        return null
      }
    }

    return node
  }

  private _getCharIndex (char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }
}

export class Node {
  private _children: Node[]
  private _isEndOfWord: boolean

  constructor() {
    this._children = new Array(26)
    this._isEndOfWord = false
  }

  getIndex(index: number): Node {
    return this._children[index]
  }

  setIndex(index: number, node: Node): void {
    this._children[index] = node
  }

  isEndOfWord (): boolean {
    return this._isEndOfWord
  }

  setEndOfWord (): void {
    this._isEndOfWord = true
  }
}

export default Trie