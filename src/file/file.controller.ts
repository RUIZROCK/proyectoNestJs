import { Controller, Get, Res } from '@nestjs/common';
import { FileService } from './file.service';

import { Response } from 'express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('download')
  async downloadFile(@Res() res: Response) {
    //llamada al servicio para obtener el archivo que devuelve una respuesta
    const file = await this.fileService.getFile();

    //Configura el encabezado de la respuesta para que el navegador descargue el archivo como testfile.pdf.
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=testfile.pdf');

    //Conecta el flujo de lectura del archivo a la respuesta HTTP, enviando el archivo al cliente.
    file.pipe(res);
  }
}
