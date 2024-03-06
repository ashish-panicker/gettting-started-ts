export default class Box<T> {

    private _value: T

    constructor(v:T){
        this._value = v
    }
    
    public get value() : T {
        return this._value
    }

    public set value(v : T) {
        this._value = v;
    }
    
    
}