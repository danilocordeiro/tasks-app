import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Store, select } from '@ngrx/store';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Task } from '../../../shared/models/task';
import { GET_TASKS } from 'src/app/reducers/task-reducer';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss'],
})
export class TaskListsComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    public dialogService: DialogService,
    private store: Store<any>
  ) {
    store.pipe(select('tasks')).subscribe((allTasks) => {
      this.allTasks = allTasks || [];
      this.todo = this.allTasks.filter((t) => !t.completed);
      console.log(this.todo);

      this.completed = this.allTasks.filter((t) => t.completed);
      console.log(this.completed);
    });
  }

  allTasks: Task[] = [];
  todo: Task[] = [];
  completed: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    let data = event.container.data[0];

    this.taskService.completeTask(data.id).subscribe((res) => {
      this.getTasks();
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.store.dispatch({ type: GET_TASKS, payload: tasks });
    });
  }

  removeTask(index: number, tasks: any[]) {
    const taskId = tasks[index].id;
    this.taskService.deleteTask(taskId).subscribe((res) => {
      this.getTasks();
    });
  }

  openTaskDialog(data, type): void {
    //data.type = type;
    const ref = this.dialogService.open(TaskFormDialogComponent, {
      header: 'Edit Task',
      data: data,
    });
  }
}
