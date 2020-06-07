import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TaskService } from '../../../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../../../shared/models/task';
import { GET_TASKS } from 'src/app/reducers/task-reducer';
@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss'],
})
export class TaskFormDialogComponent implements OnInit {
  constructor(
    public dialogRef: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private taskService: TaskService,
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) {}

  taskForm: FormGroup;
  task: Task;

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required]],
      description: [null],
      completed: [null],
      createdAt: [null],
      updatedAt: [null],
      completedAt: [null],
    });

    this.loadDataToEdit();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.store.dispatch({ type: GET_TASKS, payload: res });
    });
  }

  save() {
    const task: Task = this.taskForm.value;
    if (this.config.data.type === 'new') {
      this.taskService.addTask(task).subscribe((res) => {
        this.getTasks();
        this.dialogRef.close();
      });
    } else {
      console.log('edit', task);

      this.taskService.editTask(task).subscribe((res) => {
        this.getTasks();
        this.dialogRef.close();
      });
    }
  }

  loadDataToEdit() {
    console.log(this.config.data);

    if (this.config.data.id) {
      this.taskForm.patchValue(this.config.data);
      console.log(this.taskForm.value);
    }
  }
}
