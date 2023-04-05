import React from 'react';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import KucCodeExample from '!!raw-loader!./kucCodeExample';
import usecaseImageUrl from '@site/static/img/usecase_button.png';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="usecase">
            <h2 align="center">Use Case</h2>
            <div className="usecase_sentense" align="center">
              <span>Kintone UI Component allows you to create Kintone-like components easily. This library is useful to build Kintone customization and plug-in.</span>
            </div>
            <div className="usecase_group">
              <h6>[ Sample code & the Button Component image ]</h6>
              <div className="usecase_image">
                <img src={usecaseImageUrl} alt="button usecase" />
              </div>
              <div className="usecase_code">
                <CodeBlock language="jsx">{KucCodeExample}</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
