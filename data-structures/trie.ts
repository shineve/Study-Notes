class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode('');
  }

  insert(str: string): void {
    let current: TrieNode = this.root;
    for (let chr of str) {
      if (!current.children[chr]) {
        current.children[chr] = new TrieNode(chr);
        current.children[chr].parent = current;
      }
      current = current.children[chr];
    }
    current.isEnd = true;
  }

  search(str: string): boolean {
    let current: TrieNode = this.root;
    for (let chr of str) {
      if (current.children[chr]) {
        current = current.children[chr];
      } else {
        return false;
      }
    }
    return current.isEnd;
  }

  getSuggestions(str: string): string[] {
    let current: TrieNode = this.root;
    for (let chr of str) {
      if (current.children[chr]) {
        current = current.children[chr];
      } else {
        return [];
      }
    }
    return this.getTexts(current);
  }

  startsWith(prefix: string): boolean {
    let current: TrieNode = this.root;
    for (let chr of prefix) {
      if (current.children[chr]) {
        current = current.children[chr];
      } else {
        return false;
      }
    }
    return true;
  }

  remove(str: string): boolean {
    let current: TrieNode = this.root;
    for (let chr of str) {
      if (current.children[chr]) {
        current = current.children[chr];
      } else {
        return false;
      }
    }

    if (!current.isEnd) {
      return false;
    } else {
      current.isEnd = false;

      while (!current.isEnd && current != this.root && Object.keys(current.children).length == 0) {
        const parent = current.parent;
        delete parent.children[current.value];
        current = parent;
      }
      return true;
    }
  }

  getTexts(node: TrieNode): string[] {
    let current: TrieNode = node;
    let results: string[] = [];
    if (current.isEnd) {
      results.push(current.getText());
    }
    for (let key in current.children) {
      results.push(...this.getTexts(current.children[key]));
    }
    return results;
  }
}

class TrieNode {
  value: string | null;
  parent: TrieNode | null;
  children: {
    [key: string]: TrieNode;
  };
  isEnd: boolean;

  constructor(value: string | null) {
    this.value = value;
    this.parent = null;
    this.children = {};
    this.isEnd = false;
  }

  getText(): string {
    let text: string = '';
    let current: TrieNode = this;
    while (current != null) {
      text = current.value + text;
      current = current.parent;
    }
    return text;
  }
}

export default Trie;
