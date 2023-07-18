import React from 'react';

const Reponse = (props) => {
  const note = props.location.state.note;
  return (
    <div>
      <h2>Merci pour votre note !</h2>
      <p>Vous avez noté {note} sur 5.</p>
    </div>
  );
};

export default Reponse;
