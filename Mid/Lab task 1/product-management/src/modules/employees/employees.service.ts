
import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(data: Partial<Employee>): Promise<Employee> {
    const employee = this.employeeRepository.create(data);
    return this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });

    if (!employee) {
      throw new NotFoundException(
        `Employee with ID ${id} not found`,
      );
    }

    return employee;
  }

  async update(
    id: number,
    data: Partial<Employee>,
  ): Promise<Employee> {
    const employee = await this.findOne(id);
    Object.assign(employee, data);

    return this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<{ message: string }> {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);

    return { message: "Employee deleted successfully" };
  }
}
