/**
 * DatabaseLoader
 * ----------------------------------------------------
 * 專門負責讀取所有 Database JSON。
 * 不負責 Cache，不負責 Schema 驗證。
 */

export default class DatabaseLoader {

    /**
     * 讀取 JSON
     * @param {string} url
     * @returns {Promise<object>}
     */
    async loadJson(url) {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Failed to load database file : ${url}`
            );
        }

        return await response.json();
    }

    /**
     * 批次讀取 JSON
     * @param {string[]} urls
     * @returns {Promise<object[]>}
     */
    async loadMany(urls) {

        return Promise.all(
            urls.map(url => this.loadJson(url))
        );

    }

}