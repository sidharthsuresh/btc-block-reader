import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDefined,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class GetBlocksDto {
  @IsString()
  @ApiProperty({ required: true })
  blockStart: string;

  @IsString()
  @ApiProperty({ required: true })
  @IsOptional()
  blockEnd: string;

}
