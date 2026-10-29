import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionUpdatesController } from './construction-updates.controller';

describe('ConstructionUpdatesController', () => {
  let controller: ConstructionUpdatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstructionUpdatesController],
    }).compile();

    controller = module.get<ConstructionUpdatesController>(ConstructionUpdatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
