export default class Course {

    private _title: string
    private _topics: string[]

    constructor(title: string, topics: string[]) {
        this._title = title
        this._topics = topics
    }

    public get title(): string {
        return this._title
    }

    public set title(v: string) {
        this._title = v;
    }

    public get topics(): string[] {
        return this._topics
    }

    public set value(v: string[]) {
        this._topics = v;
    }

}