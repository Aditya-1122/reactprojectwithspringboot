package com.example.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.crud.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
