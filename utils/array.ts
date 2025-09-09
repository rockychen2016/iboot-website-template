export const isArray = (obj: unknown) => {
    return (
        Array.isArray(obj) ||
        (typeof obj === "object" &&
            Object.prototype.toString.call(obj) === "[object Array]")
    );
};


export const arrayIndexOf = <T>(
    arr: Array<T>,
    value: string | number,
    keyOrPredicate?: keyof T | ((item: T) => boolean)
): number => {
    if (typeof keyOrPredicate === 'function') {
        return arr.findIndex(keyOrPredicate);
    }

    if (typeof keyOrPredicate === 'string' && arr.length > 0 && typeof arr[0] === 'object') {
        return arr.findIndex((item) => item[keyOrPredicate] === value);
    }

    return arr.findIndex((item) => item === value);
};

export const removeArrayItem = <T>(arr: Array<T>, value: string | number, keyOrPredicate?: keyof T | ((item: T) => boolean)): boolean => {
    const index = arrayIndexOf(arr, value, keyOrPredicate);
    if (index > -1) {
        arr.splice(index, 1);
        return true;
    }
    return false;
}
