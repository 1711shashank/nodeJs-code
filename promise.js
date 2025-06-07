
//Promise

const myPromise = new Promise((res, rej) => {
    let isResolved = true;
    if (isResolved) {
        res('Promise Resolved');
    } else {
        const error = new Error('Promise Rejected');
        rej(error);
    }
})
