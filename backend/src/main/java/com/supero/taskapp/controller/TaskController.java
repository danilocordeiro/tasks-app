package com.supero.taskapp.controller;

import com.supero.taskapp.entities.Task;
import com.supero.taskapp.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping()
    public ResponseEntity<List<Task>> findAllTasks() {

        return ResponseEntity.ok(this.taskService.findAll());

    }


    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {

        Task task = this.taskService.findById(id);

        return  ResponseEntity.ok(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @Valid @RequestBody Task task) {
        Task taskUpdated = this.taskService.update(id, task);

        return  ResponseEntity.ok(taskUpdated);
    }

    @PutMapping("/{id}/completed")
    @ResponseStatus(HttpStatus.OK)
    public void completedTask(@PathVariable Long id) {
        taskService.updateCompleted(id);
    }

    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody Task task) {

        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(task));
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable Long id) {
        taskService.deleteById(id);
    }
}
