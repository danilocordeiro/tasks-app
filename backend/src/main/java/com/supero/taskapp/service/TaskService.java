package com.supero.taskapp.service;

import com.supero.taskapp.entities.Task;

import java.util.List;

public interface TaskService  {

    Task save(Task task);
    Task update(Long id, Task task);
    Task findById(Long id);
    void deleteById(Long id);
    List<Task> findAll();
    void updateCompleted(Long id);

}
