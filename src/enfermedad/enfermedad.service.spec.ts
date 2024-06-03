import { Test, TestingModule } from '@nestjs/testing';
import { EnfermedadService } from './enfermedad.service';

describe('EnfermedadService', () => {
  let service: EnfermedadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnfermedadService],
    }).compile();

    service = module.get<EnfermedadService>(EnfermedadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
