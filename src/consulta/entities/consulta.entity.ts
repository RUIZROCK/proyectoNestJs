import { Enfermedad } from 'src/enfermedad/entities/enfermedad.entity';
import { Entrada } from 'src/entrada/entities/entrada.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'consulta' })
//@ChildEntity()
export class Consulta extends Entrada {
  @Column()
  motivo: string;
  @ManyToOne(() => Enfermedad, (enfermedad) => enfermedad.idEnfermedad)
  @JoinColumn({ name: 'diagnostico_idEnfermedad' })
  diagnostico: Enfermedad;
  @Column()
  confirmacion: boolean;
}
