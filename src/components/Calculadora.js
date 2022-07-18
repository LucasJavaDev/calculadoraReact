import { useState } from 'react';
import { styles } from './Calculadora.css';

export function Calculadora() {
  const [num, setNum] = useState('');
  const [x, setX] = useState('');

  function contador(e) {
    let contNum = e.target.value;
    if (num === 0) {
      setNum(contNum);
    } else {
      setNum(num + contNum);
    }
  }

  function clearBtn(e) {
    setNum('');
  }
  function parsNegative(e) {
    setNum(-num);
  }
  function somaBtn(e) {
    setNum();
  }

  function parsPercente(e) {
    setNum(num / 100);
  }
  function calcularNum(e) {
    let resultado = eval(num);
    setNum(resultado);
  }

  return (
    <main>
      <div className="calculadora">
        <input type="text" id="visor" value={num} placeholder="0" />
        <div className="linha">
          <button type="button" className="btn clear " onClick={clearBtn}>
            C
          </button>
          <button type="button" className="btn clear " onClick={parsNegative}>
            +/-
          </button>
          <button type="button" className="btn " onClick={parsPercente}>
            %
          </button>
          <button
            type="button"
            className="btn d"
            value={'/'}
            onClick={contador}
          >
            ÷
          </button>
        </div>
        <div className="linha">
          <button type="button" className="btn" value={7} onClick={contador}>
            7
          </button>
          <button type="button" className="btn" value={8} onClick={contador}>
            8
          </button>
          <button type="button" className="btn" value={9} onClick={contador}>
            9
          </button>
          <button
            type="button"
            className="btn d"
            value={'*'}
            onClick={contador}
          >
            X
          </button>
        </div>
        <div className="linha">
          <button type="button" className="btn" value={4} onClick={contador}>
            4
          </button>
          <button type="button" className="btn" value={5} onClick={contador}>
            5
          </button>
          <button type="button" className="btn" value={6} onClick={contador}>
            6
          </button>
          <button
            type="button"
            className="btn d"
            value={'-'}
            onClick={contador}
          >
            -
          </button>
          <div className="linha">
            <button type="button" className="btn" value={1} onClick={contador}>
              1
            </button>
            <button type="button" className="btn" value={2} onClick={contador}>
              2
            </button>
            <button type="button" className="btn" value={3} onClick={contador}>
              3
            </button>
            <button
              type="button"
              className="btn igual d"
              value={'+'}
              onClick={contador}
            >
              +
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn zero"
              value={0}
              onClick={contador}
            >
              0
            </button>
            <button
              type="button"
              className="btn"
              value={','}
              onClick={contador}
            >
              ,
            </button>
            <button type="button" className="btn d" onClick={calcularNum}>
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
