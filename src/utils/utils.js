/**
 * @description A function to fetch data with retries
 * @param {String} url
 * @param {Object} options - other fetch option methods POST, DELETE ...
 * @param {Number} retries - number of times of retries if fetch fails
 * @retruns response object. Error Object otherwise
 */

export function fetchWithRetry(url, options = {}, retries) {
    return fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res;
            }

            if (retries > 0) {
                return fetchWithRetry(url, options, retries - 1);
            }
        })
        .catch((error) => console.error(error));
}
