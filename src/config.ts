interface IConfig {
    apiUrl: string;
    appealUrl: string;
}

const apiUrl: string = `http://127.0.0.1:3001/api`;
const config: IConfig = {
    apiUrl: apiUrl,
    appealUrl: `/appeal`,
};

export { config };
export type { IConfig };
