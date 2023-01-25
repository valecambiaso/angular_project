export class Student{
    name: string;
    surname: string;
    age: number;
    isActive: boolean;
    grade: number;
    course: string;

    constructor(name:string, surname:string, age:number, isActive:boolean, grade:number, course:string){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isActive = isActive;
        this.grade = grade;
        this.course = course;
    }
}