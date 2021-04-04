import { config } from "../config";
import { RequestBuilder, defaultHeaders, handleResponse } from "../helpers";

interface IRequestGet {
    path?: string;
}

interface IRequestPost {
    path?: string;
    body: Object;
}

const LinkService = {
    get: async <T>({ path }: IRequestGet): Promise<T> => {
        const requestOptions: RequestInit = new RequestBuilder()
            .makeMethod("GET")
            .makeHeaders({
                ...defaultHeaders(),
            })
            .getRequest();

        return fetch(`${config.apiUrl}${path ? path : ""}`, requestOptions).then(
            response => handleResponse(response) as Promise<T>,
        );
    },
    post: async <T>({ path, body }: IRequestPost): Promise<T> => {
        const requestOptions: RequestInit = new RequestBuilder()
            .makeMethod("POST")
            .makeHeaders({
                ...defaultHeaders(),
            })
            .makeBody(JSON.stringify(body))
            .getRequest();

        return fetch(`${config.apiUrl}${path ? path : ""}`, requestOptions).then(
            response => handleResponse(response) as Promise<T>,
        );
    },
};

export { LinkService };
