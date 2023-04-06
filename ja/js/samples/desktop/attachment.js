import React, { useEffect, useRef } from 'react';

export const AttachmentComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const attachment = new Kuc.Attachment({});

    divEl.current.appendChild(attachment)
  }, []);

  return (
    <div className="sample-container" id="attachment">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};