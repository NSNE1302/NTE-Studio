/**
 * DatabaseCache
 * -------------------------------------------------------
 * 負責快取所有 Database 資料，避免重複讀取 JSON。
 */

export default class DatabaseCache {
    constructor() {
        this.clear();
    }

    clear() {
        this.cache = {
            characters: new Map(),
            enemies: new Map(),
            cards: new Map(),
            drivers: new Map(),
            arcDisks: new Map(),
            formulas: new Map(),
            buffs: new Map()
        };
    }

    has(category, id) {
        return this.cache[category]?.has(id) ?? false;
    }

    get(category, id) {
        return this.cache[category]?.get(id) ?? null;
    }

    set(category, id, value) {
        if (!this.cache[category]) {
            throw new Error(`Unknown database category: ${category}`);
        }

        this.cache[category].set(id, value);
    }

    getAll(category) {
        if (!this.cache[category]) {
            return [];
        }

        return Array.from(this.cache[category].values());
    }

    remove(category, id) {
        this.cache[category]?.delete(id);
    }

    count(category) {
        return this.cache[category]?.size ?? 0;
    }
}