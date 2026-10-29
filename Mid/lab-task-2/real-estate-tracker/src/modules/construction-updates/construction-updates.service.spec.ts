import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionUpdatesService } from './construction-updates.service';

describe('ConstructionUpdatesService', () => {
  let service: ConstructionUpdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstructionUpdatesService],
    }).compile();

    service = module.get<ConstructionUpdatesService>(ConstructionUpdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
