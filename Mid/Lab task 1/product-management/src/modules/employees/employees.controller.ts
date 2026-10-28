
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { Employee } from "./entities/employee.entity";

@Controller("employees")
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  @Post()
  create(@Body() data: Partial<Employee>): Promise<Employee> {
    return this.employeesService.create(data);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeesService.update(id, data);
  }

  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.employeesService.remove(id);
  }
}
