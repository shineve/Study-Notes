import Trie from '../data-structures/trie';

describe('Trie', () => {
  test('insert', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    trie.insert('apple-pie');
    trie.insert('app-store');
    trie.insert('app-store-connect');

    expect(trie.getSuggestions('app')).toEqual([
      'app',
      'apple',
      'apple-pie',
      'app-store',
      'app-store-connect',
    ]);

    expect(trie.getSuggestions('')).toEqual([
      'app',
      'apple',
      'apple-pie',
      'app-store',
      'app-store-connect',
    ]);

    expect(trie.getSuggestions('pie')).toEqual([]);
  });

  test('search', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    trie.insert('apple-pie');
    trie.insert('app-store');
    trie.insert('app-store-connect');

    expect(trie.search('apple')).toEqual(true);
    expect(trie.search('app')).toEqual(true);
    expect(trie.search('apple-pie')).toEqual(true);
    expect(trie.search('app-store')).toEqual(true);
    expect(trie.search('app-store-connect')).toEqual(true);

    expect(trie.search('apg')).toEqual(false);
    expect(trie.search('ap')).toEqual(false);
    expect(trie.search('')).toEqual(false);
  });

  test('startsWith', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    trie.insert('apple-pie');
    trie.insert('app-store');
    trie.insert('app-store-connect');

    expect(trie.startsWith('a')).toEqual(true);
    expect(trie.startsWith('ap')).toEqual(true);
    expect(trie.startsWith('app')).toEqual(true);

    expect(trie.startsWith('ao')).toEqual(false);
    expect(trie.startsWith('pie')).toEqual(false);
  });

  test('remove', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    trie.insert('apple-pie');
    trie.insert('app-store');
    trie.insert('app-store-connect');

    expect(trie.getSuggestions('app')).toEqual([
      'app',
      'apple',
      'apple-pie',
      'app-store',
      'app-store-connect',
    ]);

    expect(trie.remove('apg')).toEqual(false);

    expect(trie.remove('app')).toEqual(true);
    expect(trie.remove('app')).toEqual(false);
    expect(trie.getSuggestions('app')).toEqual([
      'apple',
      'apple-pie',
      'app-store',
      'app-store-connect',
    ]);

    expect(trie.remove('app-store-connect')).toEqual(true);
    expect(trie.getSuggestions('app')).toEqual(['apple', 'apple-pie', 'app-store']);
  });
});
