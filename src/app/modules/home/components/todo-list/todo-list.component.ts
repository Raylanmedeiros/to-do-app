import { Component, DoCheck, numberAttribute, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');


  ngDoCheck() {
    this.setLocalStorage();
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

  //Validate if field is empty
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("The field is empty. Want to remove?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  //Execute a sort of checked or non checked itens
  //checked state are turned into number and number is sorted with sort() function
  //Turn Array on String and save it on Local storage
  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
