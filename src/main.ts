// // // // // // class Person {
// // // // // //   static count: number = 0;

// // // // // //   public get password(): string {
// // // // // //     return this._password;
// // // // // //   }
// // // // // //   public set password(value: string) {
// // // // // //     this._password = value;
// // // // // //   }

// // // // // //   constructor(
// // // // // //     public name: string,
// // // // // //     public age: number,
// // // // // //     protected card: number,
// // // // // //     private _password: string,
// // // // // //   ) {}
// // // // // // }

// // // // // // class User extends Person {
// // // // // //   constructor(
// // // // // //     name: string,
// // // // // //     age: number,
// // // // // //     card: number,
// // // // // //     _password: string,
// // // // // //     public mail: string,
// // // // // //   ) {
// // // // // //     super(name, age, card, _password);
// // // // // //     Person.count++;
// // // // // //   }
// // // // // // }

// // // // // // const user = new User("muhammed", 23, 12312312, "123213", "asdasdasd");
// // // // // // console.log(User.count);
// // // // // // const user2 = new User("muhammed", 23, 12312312, "123213", "asdasdasd");
// // // // // // console.log(User.count);

// // // // // class Clinic {
// // // // //   constructor(
// // // // //     public name: string,
// // // // //     public location: string,
// // // // //   ) {}
// // // // // }

// // // // // class Doctor {
// // // // //   constructor(
// // // // //     public name: string,
// // // // //     public clinic: Clinic,
// // // // //   ) {}
// // // // // }

// // // // // const clinic = new Clinic("maadi" , "asdasdasd")
// // // // // const doctor = new Doctor("muhammed" , clinic)

// // // // // console.log({doctor});

// // // // class Employee {
// // // //   constructor(
// // // //     public name: string,
// // // //     public age: number,
// // // //   ) {}
// // // // }

// // // // class Department {
// // // //   private depts: { id: number; name: string; employees: Employee[] }[] = [];
// // // //   public id: number;
// // // //   constructor(
// // // //     public name: string,
// // // //     public employees: Employee[],
// // // //   ) {
// // // //     this.id = Date.now();
// // // //     this.depts.push({ name, employees, id: this.id });
// // // //   }

// // // //   remove(id: number) {
// // // //     this.depts.filter((ele) => ele.id != id);
// // // //   }
// // // // }

// // // // const employee = new Employee("muhammed", 30);
// // // // const employee2 = new Employee("yassen", 20);

// // // // const department = new Department("it", [employee, employee2]);

// // // // console.log(department);
// // // // console.log(department.remove(Date.now()));

// // // class Room {
// // //   constructor(
// // //     public name: string,
// // //     public space: number,
// // //   ) {}
// // // }

// // // class Home {
// // //   private rooms: Room[] = [];
// // //   constructor(
// // //     public name: string,
// // //     public location: string,
// // //   ) {}

// // //   addRoom(roomName: string, roomSpace: number) {
// // //     const room = new Room("room1", 20);
// // //     this.rooms.push(room);
// // //   }
// // // }

// // // const route = new Home("toute", "cairo");

// // // route.addRoom("node", 20);

// // // console.log(route);

// // interface IPerson {
// //   name: string;
// //   age: number;
// //   gender: string;
// //   profile(): string;
// // }

// // class Person implements Partial<IPerson> {
// //   constructor(
// //     public name: string,
// //     public age: number,
// //   ) {}

// //   profile() {
// //     return `Hello ${this.name}`;
// //   }
// // }

// // class Doctor extends Person {
// //   constructor(
// //     name: string,
// //     age: number,
// //     public major: string,
// //   ) {
// //     super(name, age);
// //   }

// //   override profile() {
// //     return `Hello ${this.name}`;
// //   }

// //   makeSurgery() {
// //     return `Doctor ${this.name} do ${this.major}`;
// //   }
// // }

// // const doctor = new Doctor("ahmeed", 11, "heart");

// // console.log(doctor.profile());
// // console.log(doctor.makeSurgery());

// abstract class DBReposatory {
//   constructor(protected model: string) {}

//   create() {
//     return `create`;
//   }

//   findOne() {
//     return `done`;
//   }
// }

// class UserDBReposatory extends DBReposatory {
//   constructor() {
//     super("User");
//   }

//   findOrCreateUser() {
//     this.findOne();
//     this.create();
//   }
// }

// class ProductDBReposatory extends DBReposatory {
//   constructor() {
//     super("Product");
//   }

//   findOrCreateProduct() {
//     this.findOne();
//     this.create();
//   }
// }

// class UserService {
//   private model: UserDBReposatory;

//   constructor(model: string) {
//     this.model = new UserDBReposatory();
//   }

//   signup() {
//     this.model.findOne();
//     this.model.create();
//   }
// }

// class ProductService {
//   private model: ProductDBReposatory;

//   constructor() {
//     this.model = new ProductDBReposatory();
//   }

//   signup() {
//     this.model.findOne();
//     this.model.create();
//   }
// }



