"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Room {
    name;
    space;
    constructor(name, space) {
        this.name = name;
        this.space = space;
    }
}
class Home {
    name;
    location;
    rooms = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    addRoom(roomName, roomSpace) {
        const room = new Room("room1", 20);
        this.rooms.push(room);
    }
}
const route = new Home("toute", "cairo");
route.addRoom("node", 20);
console.log(route);
