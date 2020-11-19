export default function queryValidation(params) {
    const paramsKeyList = Object.entries(params);

    for (const [key, value] of paramsKeyList) { //reduce
        if (value === null) {
            delete params[key];
        }
    }

    return params;
}
