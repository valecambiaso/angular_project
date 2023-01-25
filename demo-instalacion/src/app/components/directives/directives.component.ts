import { Component } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  studentList: Array<Student> = [
    new Student("Juan", "Pérez", 25, true, 70, 'A'),
    new Student("Rubén", "Rojas", 23, false, 87, 'B'),
    new Student("Araceli", "Cano", 21, false, 50, 'C'),
    new Student("Mia", "Crespo", 24, true, 100, 'A'),
    new Student("Carlos", "Barea", 26, false, 20, 'B'),
    new Student("Susana", "Medrano", 22, true, 75, 'C')
  ]
  selectedStudent: Student = this.studentList[0];
}

