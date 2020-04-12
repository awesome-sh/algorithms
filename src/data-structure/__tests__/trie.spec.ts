import Trie, { Node } from '../trie'

describe('Trie', () => {
  let trie: Trie

  beforeEach(() => {
    trie = new Trie()
    trie.insert('string')
  })

  it('inserts a string', () => {
    expect(trie.search('string')).toBe(true)
  })

  it('detects an unknown string', () => {
    expect(trie.search('test')).toBe(false)
  })

  it('detects a prefix', () => {
    expect(trie.searchPrefix('str') instanceof Node).toBe(true)
  })

  it('detects an unknown prefix', () => {
    expect(trie.searchPrefix('stb')).toBe(null)
  })
})
