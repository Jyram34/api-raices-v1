import { Test, TestingModule } from '@nestjs/testing';
import { RolesAndPermissionsController } from './roles_and_permissions.controller';
import { RolesAndPermissionsService } from './roles_and_permissions.service';

describe('RolesAndPermissionsController', () => {
  let controller: RolesAndPermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesAndPermissionsController],
      providers: [RolesAndPermissionsService],
    }).compile();

    controller = module.get<RolesAndPermissionsController>(RolesAndPermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
