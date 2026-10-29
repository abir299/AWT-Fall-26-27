
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateConstructionUpdateDto {
  @IsInt()
  @Min(1)
  projectId: number;

  @IsString()
  @IsNotEmpty()
  stage: string;

  @IsInt()
  @Min(0)
  @Max(100)
  progressPercentage: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
