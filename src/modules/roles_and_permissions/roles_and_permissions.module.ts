import { Module } from '@nestjs/common';
import { RolesAndPermissionsService } from './roles_and_permissions.service';
import { RolesAndPermissionsController } from './roles_and_permissions.controller';

@Module({
  controllers: [RolesAndPermissionsController],
  providers: [RolesAndPermissionsService],
})
export class RolesAndPermissionsModule {}
