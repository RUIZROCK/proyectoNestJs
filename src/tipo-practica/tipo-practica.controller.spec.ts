import { Test, TestingModule } from '@nestjs/testing';
import { TipoPracticaController } from './tipo-practica.controller';
import { TipoPracticaService } from './tipo-practica.service';

describe('TipoPracticaController', () => {
  let controller: TipoPracticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPracticaController],
      providers: [TipoPracticaService],
    }).compile();

    controller = module.get<TipoPracticaController>(TipoPracticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
