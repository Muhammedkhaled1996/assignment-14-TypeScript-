"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    password;
    phone;
    age;
    id;
    noteBooks = [];
    constructor(name, email, password, phone, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.id = Date.now();
    }
    displayInfo() {
        return new User(this.name, this.email, this.password, this.phone, this.age);
    }
    addNoteBook(noteBook) {
        this.noteBooks.push(noteBook);
    }
    removeNoteBook(title) {
        this.noteBooks = this.noteBooks.filter((ele) => ele.title !== title);
    }
}
const user = new User("muhammed", "muhammed@gmail.com", "123", "3123123", 30);
console.log(user.displayInfo());
class Admin extends User {
    method;
    constructor(name, email, password, phone, age, method) {
        super(name, email, password, phone, age);
        this.method = method;
    }
}
const admin = new Admin("muhammed", "asdasd@adas", "123", "00123123", 30, "Super");
console.log(admin);
class Note {
    title;
    content;
    author;
    id;
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.id = Date.now();
    }
    get noteId() {
        return this.id;
    }
    perview() {
        return `note title <<<< ${this.title} >>>> with content <<<< ${this.content} >>>> published by :${this.author.name}`;
    }
}
const user2 = new User("muhammed", "213123", "123", "123213", 30);
const note = new Note("hello", "1231adadasdasda", user2);
console.log(note.perview());
class NoteBook {
    title;
    content;
    userId;
    notes = [];
    constructor(title, content, userId) {
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    addNote(title, content) {
        const note = new Note(title, content, this.userId);
        this.notes.push(note);
        return this.notes;
    }
    RemoveNote(noteId) {
        this.notes = this.notes.filter((note) => note.noteId !== noteId);
        return this.notes;
    }
}
const noteBook = new NoteBook("hello", "asdasdasd", user2);
console.log(noteBook.addNote("Note 1", "Content 1"));
console.log(noteBook.addNote("Note 2", "Content 2"));
console.log(noteBook.RemoveNote(Date.now()));
const noteBook2 = new NoteBook("adsd", "123ASDASD", user2);
user.addNoteBook(noteBook);
user.addNoteBook(noteBook);
console.log(user.noteBooks);
console.log(note);
class Storage {
    items = [];
    constructor() { }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((currentItem) => currentItem !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const storage = new Storage();
storage.addItem(1);
storage.addItem(3);
storage.addItem("s");
storage.addItem(5);
storage.addItem("zxc");
storage.addItem(true);
console.log(storage.getAllItems());
storage.removeItem(3);
console.log(storage.getAllItems());
