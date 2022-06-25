import React, { useEffect, useState } from "react";
import "./styles.css";
import "./Sap.js";

function Sap() {
  let [timer, setTimer] = useState(0);
  // let [timer, setTimer] = useState(
  //   new Date().getSeconds() + "." + new Date().getMilliseconds()
  // );
  let [word, setWord] = useState("");
  let [count, setCount] = useState(1);
  let [score, setScore] = useState(0);
  let [flag, setFlag] = useState(false);

  // let [hscore, sethScore] = useState(window.localStorage.getItem("score"));

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphasArr = Array.from(alphabet);

  let interval;
  useEffect(() => {
    window.localStorage.setItem("score", score);
  }, [score]);

  const startGame = () => {
    interval = setInterval(() => {
      setTimer((timer) => {
        if (timer < 20) {
          return (timer += 1);
        } else {
          setWord("Time Up!");
          setFlag(true);
        }
      });
    }, 1000);

    setWord(alphasArr[Math.floor(Math.random() * alphasArr.length)]);
  };
  const resetGame = () => {
    setTimer(0);
    window.location.reload();
  };
  const refresh = () => {
    setWord(() => alphasArr[Math.floor(Math.random() * alphasArr.length)]);
  };
  // useEffect(() => {}, [word]);
  const changeInput = (e) => {
    if (e.target.value.slice(e.target.value.length - 1) === word) {
      setScore((v) => v + 1);
      refresh();
      setCount((v) => v + 1);
      console.log(count);
    } else {
      setScore((v) => v - 1);
      setTimer((v) => v + 0.5);
    }
  };

  return (
    <>
      <div className="container">
        <h2>Type-The-Alphabet</h2>
        <p>
          Game to see how fast you type.Timer starts when you do :)
          <br />
        </p>
        <div className="box">
          <h2>{word}</h2>
        </div>
        <div>
          <h3>Time : {timer}</h3>
        </div>
        <div>
          {" "}
          <p>
            <strong>Highest-Score : 23</strong>
          </p>{" "}
        </div>
        <div>
          <p>
            Score : <strong>{score}</strong>
          </p>
        </div>
        {/* <div>
          <p>my best time 1.39s!</p>
        </div> */}
        <div>
          <input type="text" disabled={flag} onChange={changeInput} />
        </div>
        <div>
          <button className="start-btn" onClick={startGame}>
            Start game
          </button>

          <button className="btn" onClick={resetGame}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default Sap;
