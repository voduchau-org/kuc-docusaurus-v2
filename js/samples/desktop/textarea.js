import React, { useEffect, useRef } from 'react';

export const TextAreaComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const textarea = new Kuc.TextArea({});

    divEl.current.appendChild(textarea)
  }, []);

  return (
    <div className="sample-container" id="textarea">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};