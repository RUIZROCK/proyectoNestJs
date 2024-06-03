import { Test, TestingModule } from '@nestjs/testing';
import { TipoPracticaService } from './tipo-practica.service';

describe('TipoPracticaService', () => {
  let service: TipoPracticaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPracticaService],
    }).compile();

    service = module.get<TipoPracticaService>(TipoPracticaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
