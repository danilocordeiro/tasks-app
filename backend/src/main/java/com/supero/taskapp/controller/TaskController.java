package com.supero.taskapp.controller;

import com.supero.taskapp.entities.Task;
import com.supero.taskapp.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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


    @Operation(summary = "Get all tasks")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Return a list of tasks")})
    @GetMapping()
    public ResponseEntity<List<Task>> findAllTasks() {

        return ResponseEntity.ok(this.taskService.findAll());

    }

    @Operation(summary = "Get task by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the task",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Task.class)) }),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content) })
    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {

        Task task = this.taskService.findById(id);

        return  ResponseEntity.ok(task);
    }

    @Operation(summary = "Update task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "task updated",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Task.class)) }),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content) })
    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @Valid @RequestBody Task task) {
        Task taskUpdated = this.taskService.update(id, task);

        return  ResponseEntity.ok(taskUpdated);
    }

    @Operation(summary = "done/undone task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "success done/undone task",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content) })
    @PutMapping("/{id}/completed")
    @ResponseStatus(HttpStatus.OK)
    public void completedTask(@PathVariable Long id) {
        taskService.updateCompleted(id);
    }

    @Operation(summary = "create task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "task created",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Task.class)) }) })
    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody Task task) {

        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(task));
    }


    @Operation(summary = "delete task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "success delete task",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content) })
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable Long id) {
        taskService.deleteById(id);
    }
}
