import {Request} from "networking-ts";
import type {AxiosResponse} from "axios";

const res = new Request();

res.addResponseInterceptor({
    responseInterceptor<T>(value: AxiosResponse): Promise<T> {
        return value.data
    }
})

class MenuService {
    getMenu(): Promise<any> {
        return res.get('https://api.mocksys.com/api/v1/mock/10241');
    }
}

export {
    MenuService
} ;