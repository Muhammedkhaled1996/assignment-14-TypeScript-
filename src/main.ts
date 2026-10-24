// Solve Assignment 14 TypeScript

// 1 - Base Class

class User {
  private id: number;
  public noteBooks: NoteBook[] = [];
  constructor(
    public name: string,
    public email: string,
    private password: string,
    private phone: string,
    public age: number,
  ) {
    this.id = Date.now();
  }

  displayInfo() {
    return new User(this.name, this.email, this.password, this.phone, this.age);
  }

  addNoteBook(noteBook: NoteBook): void {
    this.noteBooks.push(noteBook);
  }

  removeNoteBook(title: string): void {
    this.noteBooks = this.noteBooks.filter((ele) => ele.title !== title);
  }
}

const user = new User("muhammed", "muhammed@gmail.com", "123", "3123123", 30);

console.log(user.displayInfo());

// 2 - inhertance - Admin User

class Admin extends User {
  constructor(
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
    public method: string,
  ) {
    super(name, email, password, phone, age);
  }
}

const admin = new Admin("muhammed", "asdasd@adas", "123", "00123123", 30, "Super");

console.log(admin);

// 3- Class Note

class Note {
  private id: number;
  constructor(
    public title: string,
    public content: string,
    public author: User,
  ) {
    this.id = Date.now();
  }

  public get noteId() {
    return this.id;
  }

  perview() {
    return `note title <<<< ${this.title} >>>> with content <<<< ${this.content} >>>> published by :${this.author.name}`;
  }
}

const user2 = new User("muhammed", "213123", "123", "123213", 30);

const note = new Note("hello", "1231adadasdasda", user2);

console.log(note.perview());

//4- composition - NoteBook and Notes

class NoteBook {
  public notes: Note[] = [];
  constructor(
    public title: string,
    public content: string,
    public userId: User,
  ) {}

  addNote(title: string, content: string): Note[] {
    const note = new Note(title, content, this.userId);
    this.notes.push(note);
    return this.notes;
  }

  RemoveNote(noteId: number): Note[] {
    this.notes = this.notes.filter((note) => note.noteId !== noteId);
    return this.notes;
  }
}

const noteBook = new NoteBook("hello", "asdasdasd", user2);

console.log(noteBook.addNote("Note 1", "Content 1"));
console.log(noteBook.addNote("Note 2", "Content 2"));
console.log(noteBook.RemoveNote(Date.now()));

// 5- Aggregation - User and NoteBook >>>>>  solution in User class

const noteBook2 = new NoteBook("adsd", "123ASDASD", user2);
user.addNoteBook(noteBook);
user.addNoteBook(noteBook);

console.log(user.noteBooks);

// 6- Association - Note and User >>> solution in Note class

console.log(note);

// 7- Generic - Data Storage

class Storage<T> {
  private items: T[] = [];
  constructor() {}

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter((currentItem) => currentItem !== item);
  }

  getAllItems(): T[] {
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
