import { Component, OnInit } from '@angular/core';
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
export class App implements OnInit {
  taskName='';

  constructor(public task: task){
    console.log('Constructor called');
  }

  ngOnInit(){
    console.log('App component initialized.Current tasks:',this.task.tasks);
  }

  onAddTask(){
    this.task.addTask(this.taskName);
    this.taskName=''
  }
  onHeaderTitleClicked(){
    console.log('Header title was clicked!');
  }
}
