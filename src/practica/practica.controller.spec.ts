import { Test, TestingModule } from '@nestjs/testing';
import { PracticaController } from './practica.controller';
import { PracticaService } from './practica.service';

describe('PracticaController', () => {
  let controller: PracticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticaController],
      providers: [PracticaService],
    }).compile();

    controller = module.get<PracticaController>(PracticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
