import React from 'react';

import * as S from './Loading.styles';

const Loading: React.FC = () => {
  return (
    <S.Container aria-label="loading-progressbar">
      <S.ProgressBar isIndeterminate>
        {({ percentage }) => (
          <>
            <S.Label>Loading…</S.Label>
            <S.Bar>
              <div className="fill" style={{ width: percentage + '%' }} />
            </S.Bar>
          </>
        )}
      </S.ProgressBar>
    </S.Container>
  );
};

export default Loading;
