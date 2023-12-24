var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getUser = function (user) {
    return __assign(__assign({}, user), { newName: user.name.toUpperCase() });
};
var user = getUser({ id: 45, name: 'Pablo', cellphone: 89214432 });
console.log(user);
