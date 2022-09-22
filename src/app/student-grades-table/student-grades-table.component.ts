import { Component, OnInit } from '@angular/core';
import { HomeWork } from './home-work.model';
import { Student } from './student.model';

@Component({
  selector: 'app-student-grades-table',
  templateUrl: './student-grades-table.component.html',
  styleUrls: ['./student-grades-table.component.css'],
})
export class StudentGradesTableComponent implements OnInit {
  homeWorkName!: string;
  homeWorkPeriod!: string;
  students: Student[] = [
    new Student('Lasha Deisadze'),
    new Student('Revaz kukhianidze'),
    new Student('Dimitri Baratashvili'),
    new Student('Ana Kiladze'),
    new Student('Lasha Chubinidze'),
  ];

  constructor() {}

  ngOnInit(): void {
    this.students = JSON.parse(localStorage['students']);
  }

  onHomeWorkSave() {
    this.students.forEach((item) => {
      item.homeWorks.push(new HomeWork(this.homeWorkName, this.homeWorkPeriod));
    });
    this.homeWorkName = '';
    this.homeWorkPeriod = '';
  }
  getAllHomeWorkNames() {
    return this.students[0].homeWorks.map((item) => item.homeWorkName);
  }
  saveGrades() {
    localStorage['students'] = JSON.stringify(this.students);
    this.students.sort((firstSt: Student, secontSt: Student) => {
      let firtsStudentGrade = firstSt.homeWorks
        .map((item) => item.grade)
        .reduce((a, b) => a + b, 0);

      let secondStudentGrade = secontSt.homeWorks
        .map((item) => item.grade)
        .reduce((a, b) => a + b, 0);

      return secondStudentGrade - firtsStudentGrade;
    });
  }
}
