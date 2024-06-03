import { Test, TestingModule } from '@nestjs/testing';
import { EnfermedadController } from './enfermedad.controller';
import { EnfermedadService } from './enfermedad.service';

describe('EnfermedadController', () => {
  let controller: EnfermedadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnfermedadController],
      providers: [EnfermedadService],
    }).compile();

    controller = module.get<EnfermedadController>(EnfermedadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
