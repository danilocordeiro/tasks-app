import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { DialogService } from 'primeng/dynamicdialog';
import { TaskFormDialogComponent } from './task-form-dialog/task-form-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}

  openTaskDialog(object, type) {
    object.type = type;
    const ref = this.dialogService.open(TaskFormDialogComponent, {
      header: 'New Task',
      data: object,
    });
  }
}
