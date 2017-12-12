export function isObject(value) {
    return value !== null && typeof value === 'object';
}
export function isCallable(value) {
    return typeof value === 'function';
}
export function isSameObjectContent(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    var keys = Object.keys(obj1);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (isObject(obj1[key]) && isObject(obj2[key])) {
            if (!isSameObjectContent(obj1[key], obj2[key])) {
                return false;
            }
        }
        else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
export function isUndefined(value) {
    var UNDEFINED = void (0);
    return value === UNDEFINED;
}
export function deepCopyOf(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/* tslint:disable: no-bitwise */
export var generateUUID = (function () {
    var table = [];
    for (var i = 0; i < 256; i++) {
        table[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    return function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return table[d0 & 0xff] + table[d0 >> 8 & 0xff] + table[d0 >> 16 & 0xff] + table[d0 >> 24 & 0xff] + '-' +
            table[d1 & 0xff] + table[d1 >> 8 & 0xff] + '-' + table[d1 >> 16 & 0x0f | 0x40] + table[d1 >> 24 & 0xff] + '-' +
            table[d2 & 0x3f | 0x80] + table[d2 >> 8 & 0xff] + '-' + table[d2 >> 16 & 0xff] + table[d2 >> 24 & 0xff] +
            table[d3 & 0xff] + table[d3 >> 8 & 0xff] + table[d3 >> 16 & 0xff] + table[d3 >> 24 & 0xff];
    };
})();
/* tslint:enable: no-bitwise */
//# sourceMappingURL=utils.js.map