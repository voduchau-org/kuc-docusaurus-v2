import React, { useEffect, useRef } from 'react';

export const SpinnerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {

    const spinner = new Kuc.Spinner({className: "spinner"});
    spinner.open();

    divEl.current.appendChild(spinner);

//     const script = `
//     const spinner = new Kuc.Spinner();
//     spinner.open();
//   `;

//   divEl.current.contentWindow.Kuc = Kucs["1.10.0"]

//   divEl.current.contentWindow.eval(script);
  }, []);

  return (
    <div className="sample-container" id="spinner">
      <div id="sample-container__components" ref={divEl}>
         {/* <iframe id="iframe" title="spinner image" width="300px" height="200px" ref={divEl}></iframe> */}
      </div>
    </div>
  );
};