/**
 * SchemaValidator
 * --------------------------------------------------------
 * 驗證 Database JSON 是否符合 Schema。
 */

export default class SchemaValidator {

    /**
     * 檢查必要欄位
     * @param {Object} data
     * @param {string[]} requiredFields
     */
    validateRequired(data, requiredFields) {

        for (const field of requiredFields) {

            if (!(field in data)) {

                throw new Error(
                    `Missing required field : ${field}`
                );

            }

        }

    }

    /**
     * 檢查型別
     * @param {Object} data
     * @param {Object} schema
     */
    validateTypes(data, schema) {

        for (const key in schema) {

            if (!(key in data)) continue;

            const expected = schema[key];

            const actual = Array.isArray(data[key])
                ? "array"
                : typeof data[key];

            if (expected !== actual) {

                throw new Error(

                    `${key} should be ${expected} but got ${actual}`

                );

            }

        }

    }

    /**
     * 完整驗證
     */
    validate(data, config) {

        this.validateRequired(
            data,
            config.required ?? []
        );

        this.validateTypes(
            data,
            config.types ?? {}
        );

        return true;

    }

}