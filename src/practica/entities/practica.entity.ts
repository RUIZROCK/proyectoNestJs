import { Entrada } from 'src/entrada/entities/entrada.entity';
import { TipoPractica } from 'src/tipo-practica/entities/tipo-practica.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'practica' })
export class Practica extends Entrada {
  @ManyToOne(() => TipoPractica)
  @JoinColumn({ name: 'idTipo' })
  tipo: TipoPractica;
  @Column()
  duracion: number;
  @Column()
  complicaciones: string;
  @Column()
  resultado: string;
}
