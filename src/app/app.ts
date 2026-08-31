import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  taskName='';
  tasks:string[]=[];

  addTask(){
    if(this.taskName.trim()){
      this.tasks.push(this.taskName);
      this.taskName='';
    }
  }
  removeTask(index:number){
    this.tasks.splice(index,1);
  }
  protected readonly title = signal('task-manager');
}
