import { Component, DoCheck, numberAttribute, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }


  //Add item to list
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  //Single Delete
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  //Delete All
  public deleteAllTaskList() {
    const confirm = window.confirm("Do you want to delete all?")

    if (confirm) {
      this.taskList = [];
    }
  }

}
