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

        const response = await fetch(`${config.apiUrl}${path ? path : ""}`, requestOptions);

        return handleResponse(response) as Promise<T>;
    },
    post: async <T>({ path, body }: IRequestPost): Promise<T> => {
        const requestOptions: RequestInit = new RequestBuilder()
            .makeMethod("POST")
            .makeHeaders({
                ...defaultHeaders(),
            })
            .makeBody(JSON.stringify(body))
            .getRequest();

        const response = await fetch(`${config.apiUrl}${path ? path : ""}`, requestOptions);

        return handleResponse(response) as Promise<T>;
    },
};

export { LinkService };
