import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${environment.apiUrl}/tasks`);
  }

  addTask(data) {
    return this.http.post(`${environment.apiUrl}/tasks`, data);
  }

  editTask(data) {
    return this.http.put(`${environment.apiUrl}/tasks/${data.id}`, data);
  }

  completeTask(id) {
    return this.http.put(`${environment.apiUrl}/tasks/${id}/completed`, {});
  }

  deleteTask(id) {
    return this.http.delete(`${environment.apiUrl}/tasks/${id}`);
  }
}
