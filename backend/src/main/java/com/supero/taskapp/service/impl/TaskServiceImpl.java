package com.supero.taskapp.service.impl;

import com.supero.taskapp.entities.Task;
import com.supero.taskapp.repository.TaskRepository;
import com.supero.taskapp.service.TaskService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    public Task save(Task task) {

        return taskRepository.save(task);
    }

    public Task update(Long id, Task task) {
        if (!taskRepository.existsById(task.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not updated");
        }

        Task taskToSave = findById(id);
        BeanUtils.copyProperties(task, taskToSave, "id", "completedAt");

        return taskRepository.save(taskToSave);
    }

    public void updateCompleted(Long id) {

        Task taskToSave = findById(id);
        taskToSave.setCompleted(!taskToSave.getCompleted());
        taskToSave.setCompletedAt(taskToSave.getCompleted() ? LocalDateTime.now() : null);


        taskRepository.save(taskToSave);
    }


    public Task findById(Long id) {
        Optional<Task> result = taskRepository.findById(id);

        Task task;

        if (result.isPresent()) {
            task = result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }

        return task;
    }

    public void deleteById(Long id) {

        taskRepository.deleteById(id);
    }


    public List<Task> findAll() {
        return  taskRepository.findAll();
    }
}
