import { PartialType } from '@nestjs/swagger';
import { CreateRolesAndPermissionDto } from './create-roles_and_permission.dto';

export class UpdateRolesAndPermissionDto extends PartialType(CreateRolesAndPermissionDto) {}
