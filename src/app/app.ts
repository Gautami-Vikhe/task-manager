import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { task } from './task';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  taskName='';

  constructor(public task: task){}

  onAddTask(){
    this.task.addTask(this.taskName);
    this.taskName=''
  }
}
