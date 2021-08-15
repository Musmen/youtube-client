export class MyLocalStorage implements Storage {
  private _storage: Map<string, string | null>;

  constructor() {
    this._storage = new Map();
  }

  get length(): number {
    return this._storage.size;
  }

  clear(): void {
    this._storage.clear();
  }

  key(index: number): string | null {
    return Array.from(this._storage.values())[index];
  }

  getItem(key: string): string | null {
    return this._storage.get(key) || null;
  }

  setItem(key: string, value: string | null): void {
    this._storage.set(key, value);
  }

  removeItem(key: string): void {
    this._storage.delete(key);
  }
}
