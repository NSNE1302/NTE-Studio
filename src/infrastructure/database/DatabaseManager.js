import DatabaseCache from "./DatabaseCache.js";
import DatabaseLoader from "./DatabaseLoader.js";
import SchemaValidator from "./SchemaValidator.js";

export default class DatabaseManager {

    constructor() {

        this.cache = new DatabaseCache();
        this.loader = new DatabaseLoader();
        this.validator = new SchemaValidator();

        this.initialized = false;

    }

    async initialize() {

        if (this.initialized) {
            return;
        }

        this.initialized = true;

    }

    async load(category, id, url, schema) {

        if (this.cache.has(category, id)) {
            return this.cache.get(category, id);
        }

        const data = await this.loader.loadJson(url);

        this.validator.validate(data, schema);

        this.cache.set(category, id, data);

        return data;

    }

    get(category, id) {

        return this.cache.get(category, id);

    }

    getAll(category) {

        return this.cache.getAll(category);

    }

    clear() {

        this.cache.clear();

    }

}