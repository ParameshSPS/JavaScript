const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        // return (arg) => {
        // return (args1, args2, args3) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // func(arg);
            // func(args1, args2, args3)
            func.apply(null, args)
        }, delay)
    };
};