// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favLanguage = attributes.favLanguage;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject){
        console.log(`${student.name} debugs ${student.name}'s code on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

const john = new Person({
    name: 'John Doe',
    location: 'Mars',
    age: 31,
    gender: 'Male'
});

const jessie = new ProjectManagers({
    name: 'Jessie Doe',
    location: 'Earth',
    age: 23,
    gender: 'Female',
    gradClassName: 'web9999'
});

const josh = new Instructor({
    name: 'Josh Doe',
    location: 'Earth',
    age: 23,
    gender: 'Male',
    favLanguage: 'Swift',
    speciality: 'React',
    catchPhrase: 'wassup'
})
const jane = new Student({
    name: 'Jane Doe',
    location: 'Earth',
    age: 42,
    gender: 'Female',
    favSubjects: ['Java','C','HTML', 'Preprocessing'],
    previousBackground: 'cashier',
    className: 'web18'
})




john.speak();
console.log(john.gender);
jessie.speak();
jessie.standUp('web100000-jessie');
jessie.debugsCode(jane,'css');
console.log(jessie.age);
josh.speak();
console.log(josh.favLanguage);
console.log(josh.speciality);
console.log(josh.catchPhrase);
josh.demo('CSS');
jane.listsSubjects();
jane.PRAssignment('preprocessing');
jane.sprintChallenge('preprocessing');
