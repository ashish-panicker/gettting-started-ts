export default class Course {
    _title;
    _topics;
    constructor(title, topics) {
        this._title = title;
        this._topics = topics;
    }
    get title() {
        return this._title;
    }
    set title(v) {
        this._title = v;
    }
    get topics() {
        return this._topics;
    }
    set value(v) {
        this._topics = v;
    }
}
//# sourceMappingURL=course.js.map