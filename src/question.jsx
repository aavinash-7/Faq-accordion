import { useState } from 'react';
import './index.css';

function Ques({ Question, Answer }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="div1">
        <h4>{Question}</h4>
        <button
          onClick={() => setShow(!show)}
          style={{ backgroundColor: show ? '#000' : '#AF38E3' }}
        >
          {show ? '−' : '+'}
        </button>
      </div>
      <p style={{ display: show ? 'block' : 'none' }}>{Answer}</p>
    </div>
  );
}

export default Ques;
