import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
    private _subject: BehaviorSubject<T>
    private _observable: Observable<T>;

    constructor(initialValue: T) {
        this._subject = new BehaviorSubject(initialValue);
        this._observable = this._subject.asObservable();
    }

    set(object: T) {
        this._subject.next(object);
    }

    append(object: Partial<T>) {
        this.set({...this.get(), ...object} as T);
    }

    get(): T | undefined {
        return this._subject.getValue();
    }

    get subject() {
        return this._subject;
    }

    get observable() {
        return this._observable;
    }
}