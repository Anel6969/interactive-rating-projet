import React, { useState } from 'react';


const NoteSubmit = () => {
  const [clicks, setClicks] = useState([false]);

  const buttonClicked = (index) => {
    const newClicks = [...clicks];
    newClicks[index] =  !newClicks[index];
    setClicks(newClicks);
 
  };

  

  const max = 5;
  let rows = [];
  for(let i = 0; i < max; i++){
    rows.push(
    <div 
    key={i}
    className={`Numero${i + 1} ${clicks[i] ? 'clicked' : ''}`} onClick={() => buttonClicked(i)}>
      {i  + 1}</div>)
  }
    return (
      <section className="NoteNumero">
        {rows};
        {/* <div className={`Numero1 ${clicks[0] ? 'clicked' : ''}`} onClick={() => buttonClicked(0)}>1</div>
        <div className={`Numero2 ${clicks[1] ? 'clicked' : ''}`} onClick={() => buttonClicked(1)}>2</div>
        <div className={`Numero3 ${clicks[2] ? 'clicked' : ''}`} onClick={() => buttonClicked(2)}>3</div>
        <div className={`Numero4 ${clicks[3] ? 'clicked' : ''}`} onClick={() => buttonClicked(3)}>4</div>
        <div className={`Numero5 ${clicks[4] ? 'clicked' : ''}`} onClick={() => buttonClicked(4)}>5</div> */}
      </section>
    );
};

export default NoteSubmit;
