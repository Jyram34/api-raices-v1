import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { RolesAndPermissionsModule } from './modules/roles_and_permissions/roles_and_permissions.module';

@Module({
  imports: [UsersModule, RolesAndPermissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
