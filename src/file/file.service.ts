import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class FileService {
  private readonly filePath = path.join(
    __dirname,
    '..',
    'file',
    'testfile.pdf',
  );

  async getFile(): Promise<fs.ReadStream> {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(this.filePath)) {
        resolve(fs.createReadStream(this.filePath));
      } else {
        axios({
          method: 'get',
          url: 'https://link.testfile.org/PDF200MB',
          responseType: 'stream',
        })
          //Manejo de una respuesta exitosa
          .then((response) => {
            //Crea un flujo de escritura hacia el archivo en filePath.
            const writeStream = fs.createWriteStream(this.filePath);
            // Conecta el flujo de datos de la respuesta al flujo de escritura, lo que guarda el archivo en disco.
            response.data.pipe(writeStream);

            //si finaliza la escritura, resuelve la promise con un flujo de escritura del archivo
            writeStream.on('finish', () => {
              resolve(fs.createReadStream(this.filePath));
            });
            //si ocurre un error en la escritura, rechaza la promise
            writeStream.on('error', (err) => {
              reject(err);
            });
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }
}
