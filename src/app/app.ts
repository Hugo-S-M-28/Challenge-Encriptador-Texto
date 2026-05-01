import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente principal de la aplicación Encriptador de Texto.
 * Maneja la lógica de encriptación, desencriptación y gestión del estado de la UI.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Propiedades vinculadas a la vista (app.html)
  inputText: string = '';
  resultText: string = '';
  errorMessage: string = '';
  showResult: boolean = false;

  // Matriz de codificación base (no se debe cambiar)
  private readonly CODIGO_MATRIZ: [string, string][] = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  /**
   * Encripta el texto ingresado.
   * Ahora maneja mayúsculas, minúsculas, acentos y puntuación.
   */
  encriptar(): void {
    if (!this.inputText.trim()) {
      this.mostrarError('Por favor, ingrese un texto para encriptar.');
      return;
    }

    this.errorMessage = '';
    const mapa = this.generarMapaVocal();
    const regex = new RegExp(`[${Object.keys(mapa).join('')}]`, 'g');
    
    // Usamos replace con una función para evitar la re-encriptación de caracteres ya procesados
    const textoEncriptado = this.inputText.replace(regex, (match) => mapa[match] || match);
    
    this.actualizarResultado(textoEncriptado);
  }

  /**
   * Desencripta el texto ingresado.
   */
  desencriptar(): void {
    if (!this.inputText.trim()) {
      this.mostrarError('Por favor, ingrese un texto para desencriptar.');
      return;
    }

    this.errorMessage = '';
    const mapa = this.generarMapaInverso();
    // Ordenamos las llaves por longitud descendente para evitar reemplazos parciales incorrectos
    const llaves = Object.keys(mapa).sort((a, b) => b.length - a.length);
    const regex = new RegExp(llaves.join('|'), 'g');
    
    const textoDesencriptado = this.inputText.replace(regex, (match) => mapa[match] || match);
    
    this.actualizarResultado(textoDesencriptado);
  }

  /**
   * Genera dinámicamente un mapa de todas las variantes de vocales (mayúsculas, acentos)
   * basándose en la matriz de codificación original.
   */
  private generarMapaVocal(): Record<string, string> {
    const mapa: Record<string, string> = {};
    const variantes: Record<string, string[]> = {
      'a': ['a', 'A', 'á', 'Á'],
      'e': ['e', 'E', 'é', 'É'],
      'i': ['i', 'I', 'í', 'Í'],
      'o': ['o', 'O', 'ó', 'Ó'],
      'u': ['u', 'U', 'ú', 'Ú']
    };

    for (const [base, reemplazo] of this.CODIGO_MATRIZ) {
      for (const v of variantes[base]) {
        let r = reemplazo;
        
        // Si el carácter original es mayúscula, el reemplazo será mayúscula
        if (v === v.toUpperCase()) {
          r = r.toUpperCase();
        }
        
        // Si el carácter original tiene acento, mantenemos el acento en la primera letra del reemplazo
        if (['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'].includes(v)) {
          r = v + r.slice(1).toLowerCase();
          if (v === v.toUpperCase()) r = r.toUpperCase();
        }
        
        mapa[v] = r;
      }
    }
    return mapa;
  }

  /**
   * Genera el mapa inverso para la desencriptación.
   */
  private generarMapaInverso(): Record<string, string> {
    const mapaVocal = this.generarMapaVocal();
    const mapaInverso: Record<string, string> = {};
    
    for (const [vocal, reemplazo] of Object.entries(mapaVocal)) {
      mapaInverso[reemplazo] = vocal;
    }
    
    return mapaInverso;
  }

  /**
   * Copia el texto resultante al portapapeles.
   */
  copiar(): void {
    if (this.resultText) {
      navigator.clipboard.writeText(this.resultText)
        .then(() => {
          // Opcional: Feedback al usuario
          console.log('Texto copiado con éxito');
        })
        .catch(err => {
          console.error('Error al copiar el texto: ', err);
        });
    }
  }

  /**
   * Muestra un mensaje de error y resetea el estado del resultado.
   */
  private mostrarError(mensaje: string): void {
    this.errorMessage = mensaje;
    this.showResult = false;
  }

  /**
   * Actualiza el texto de resultado, lo muestra en pantalla y limpia la entrada.
   */
  private actualizarResultado(texto: string): void {
    this.resultText = texto;
    this.showResult = true;
    this.inputText = ''; // Limpia el textarea después de procesar
    this.errorMessage = '';
  }
}

