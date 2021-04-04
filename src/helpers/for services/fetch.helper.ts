const defaultHeaders = () => {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };
};

const handleResponse = (response: Response): any => {
    return new Promise(async (resolve, reject) => {
        const data = await response.json();
        if (data.status === "failure") {
            reject(data);
        }

        resolve(data);
    });
};

export { defaultHeaders, handleResponse };
