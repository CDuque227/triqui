import { fetch as fetchPolyfill } from "whatwg-fetch";

const serviceApi = (data, url, typePeticion, file = false) => {
    let request = "";
    if (typePeticion === "POST") {
        request = file
            ? fetchPolyfill(url, {
                method: typePeticion,
                header: { "Content-Type": "multipart/form-data" },
                body: data,
            })
            : fetchPolyfill(url, {
                method: typePeticion,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    } else {
        request = fetchPolyfill(url, {
            method: typePeticion,
            headers: {
                Accept: "application/json",
            },
        });
    }
    return new Promise((resolve, reject) => {
        request
            .then(parseJSON)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const parseJSON = (response) => {
    return response.json();
};

export {
    serviceApi,
};
