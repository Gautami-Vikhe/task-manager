import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class task{
    tasks:string[]=[];

    addTask(taskName:string){
        if(taskName.trim()){
            this.tasks.push(taskName);
        }
    }
    removeTask(index:number){
        this.tasks.splice(index,1);
    }
}