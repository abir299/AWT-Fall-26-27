
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
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() data: Partial<Product>): Promise<Product> {
    return this.productsService.create(data);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(id, data);
  }

  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.productsService.remove(id);
  }
}
