
enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}
type TPromiseResolve<T> = (value: T) => void
type TPromiseReject<T> = (reason: T) => void
type TPromiseExecutor<T, K> = (resolve: TPromiseResolve<T>, reject: TPromiseReject<K>) => void

type TPromiseThenCallback<T> = (value: T | undefined) => void
type TPromiseCatchCallback<T> = (reason: T | undefined) => void

class MyPromise<T, K> {
    private _state: PromiseState = PromiseState.PENDING 

    private _successCallbackHandlers: TPromiseThenCallback<T>[] = []
    private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = []

    private _value: T | undefined = undefined
    private _reason: K | undefined = undefined

    constructor(executor: TPromiseExecutor<T, K>) {
        executor(this._promiseResolver.bind(this), this._promiseRejector.bind(this))
    }

    public then(handlerFunction: TPromiseThenCallback<T>) {
        // we will call this handlerFunction when our promise is resolved.
        if(this._state === PromiseState.FULFILLED){
            handlerFunction(this._value)
        } else {
            this._successCallbackHandlers.push(handlerFunction)
        }
        return this
    }

    public catch(handlerFunction: TPromiseCatchCallback<K>) {
        if(this._state === PromiseState.REJECTED){
            handlerFunction(this._reason)
        } else {
            this._failureCallbackHandlers.push(handlerFunction)
        }
        return this
    }

    private _promiseResolver(value: T) {
        if (this._state === PromiseState.FULFILLED) {
            return
        }
        this._state = PromiseState.FULFILLED
        this._successCallbackHandlers.forEach((cb) => {
            cb(value)
        })
    }

    private _promiseRejector(reason: K) {
        if (this._state === PromiseState.REJECTED) {
            return
        }
        this._state = PromiseState.REJECTED
        this._failureCallbackHandlers.forEach((cb) => {
            cb(reason)
        })
    }
}



const timing = () => new MyPromise<number, string>((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected")
    }, 2000)
})

timing()
.then((value) => {
    console.log("Promise resolved", value)
})
.catch((reason) => {
    console.log("Promise rejected", reason)
})