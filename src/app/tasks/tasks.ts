import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {
  taskName='';
  today=new Date();

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
 
}
