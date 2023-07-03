import { useState } from "react";
import "./styles.css";

/**
 * Esta función recibe un texto y devuelve el mismo texto en formato
 * título, capitalizando la primer letra del mismo.
 *
 * @param {string} texto
 * @returns {string}
 */
const capitalizar = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);

/**
 *  Esta función recibe un texto y lo normaliza, eliminando los espacios en blanco
 * al principio y final del mismo, y capitalizando la primer letra de cada palabra.
 *
 * @param {string} texto
 * @returns {string}
 */
const normalizar = (texto) =>
  texto
    .trim()
    .split(" ")
    .map((palabra) => capitalizar(palabra))
    .join(" ");

/**
 * Esta función recibe un texto y lo codifica utilizando un esquema de codificación
 * base64. Retorna el texto codificado.
 * @param {string} texto
 * @returns {string}
 */
const codificar = (texto) => btoa(texto);

/**
 * Esta función recibe un texto codificado en base64 y lo decodifica. Retorna el texto
 * decodificado.
 * @param {string} textoCodificado
 * @returns {string}
 */
const decodificar = (textoCodificado) => atob(textoCodificado);

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [textoCodificado, setTextoCodificado] = useState("");
  const [textoDecodificado, setTextoDecodificado] = useState("");

  /**
   * Esta función recibe el evento de blur del input del título,
   * y modifica el estado pasandole el valor normalizado de dicho título,
   * luego de pasarlo por la función de normalización.
   * @param {InputEvent} e
   */
  const modificarTitulo = (e) => setTitulo(normalizar(e.target.value));

  /**
   * Esta función recibe el evento de blur del input de codificar texto,
   * y modifica el estado pasandole el valor codificado,
   * luego de pasarlo por la función de codificación.
   * @param {InputEvent} e
   */
  const codificarTexto = (e) => setTextoCodificado(codificar(e.target.value));

  /**
   * Esta función recibe el evento de blur del input de decodificar texto,
   * y modifica el estado pasandole el valor decodificado,
   * luego de pasarlo por la función de decodificación.
   * @param {InputEvent} e
   */
  const decodificarTexto = (e) =>
    setTextoDecodificado(decodificar(e.target.value));

  return (
    <div className="App">
      <h1>
        Herramientas de texto{"  "}
        <span role="img" aria-label="pencil-hand">
          ✍️
        </span>
      </h1>
      <section>
        <h2>Formato de título</h2>
        <div>
          <label htmlFor="titulo">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="titulo"
            onBlur={modificarTitulo}
          />
          <strong>
            Resultado: <span>{titulo}</span>
          </strong>
        </div>
      </section>
      <section>
        <h2>Codificar Texto</h2>
        <div>
          <label htmlFor="textoACodificar">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="textoACodificar"
            onBlur={codificarTexto}
          />
          <strong>
            Resultado: <span>{textoCodificado}</span>
          </strong>
        </div>
      </section>
      <section>
        <h2>Decodificar Texto</h2>
        <div>
          <label htmlFor="textoADecodificar">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="textoADecodificar"
            onBlur={decodificarTexto}
          />
          <strong>
            Resultado: <span>{textoDecodificado}</span>
          </strong>
        </div>
      </section>
    </div>
  );
}
