import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  toDoList: String[];
  newToDo: String = '';
  done = false;

  constructor() { }

  ngOnInit() {
    this.toDoList = [
      'Finish reading the book',
      'Play badminton',
      'Cook biryani!',
      'Clean my room',
      'Go for a run',
      'Book holiday tickets',
      'Buy flowers'
    ];
  }

  updateList() {
    this.toDoList.push(this.newToDo);
    this.newToDo = '';
  }

  markDone(todo: String) {
    const index = this.toDoList.indexOf(todo);
    this.toDoList.splice(index, 1);
    if (this.toDoList.length === 0) {
      this.displayDone();
    }
  }

  displayDone() {
    this.done = true;
  }

}
