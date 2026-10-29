
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateFlatDto {
  @IsString()
  @IsNotEmpty()
  flatNumber: string;

  @IsInt()
  @Min(0)
  floor: number;

  @IsInt()
  @Min(1)
  sizeSqft: number;

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsInt()
  @Min(1)
  projectId: number;
}
