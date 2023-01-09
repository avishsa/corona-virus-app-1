const deploy = async (method, path, data,basicAxios,authHeaders) => {    
    switch (method) {
        case 'POST': return basicAxios.post(path, data) ;
        case 'DELETE': return data ? basicAxios.delete(path, data) : basicAxios.delete(path);
        case 'PATCH': return data ? basicAxios.patch(path, data) : basicAxios.patch(path);
        case 'GET': {
            return basicAxios.get(path,null,{});
        }
        case 'PUT':  return data ? basicAxios.put(path, data) : basicAxios.put(path);
        default: throw new Error('invalid method');
    }
};


export const API = deploy;