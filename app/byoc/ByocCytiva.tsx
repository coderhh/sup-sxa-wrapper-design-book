"use client";
import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocCytivaProps {
  title: string;
  columnsCount: number;
}

export const ByocCytiva = (props: ByocCytivaProps): JSX.Element => {
  const columns: string[] = [];
  for (let i = 0; i < props.columnsCount; i++) {
    columns.push(`Component Column ${i + 1}`);
  }
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
      <p>ByocCytiva Component</p>
      <div className="row">
        {columns.map((text, index) => (
          <div key={index} className={`col-sm-${props.columnsCount}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocCytiva, {
  name: 'ByocCytiva',
  group: 'Cytiva-Design-Book',
  properties: {
    title: {
      type: 'string',
    },
    columnsCount: {
      type: 'number',
    },
  },
});
