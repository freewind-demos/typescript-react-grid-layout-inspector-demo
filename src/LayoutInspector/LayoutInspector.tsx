import {Layout} from 'react-grid-layout';
import React, {useState} from 'react';

import './LayoutInspector.pcss';

type LayoutInspectorProps = {
  layouts: Layout[],
  setLayouts: (layouts: Layout[]) => void,
  layoutKey: string,
}

export default function LayoutInspector({layouts, layoutKey, setLayouts}: LayoutInspectorProps) {

  const layout = layouts.find(it => it.i === layoutKey)!

  function updateLayouts(layout: Layout) {
    const newLayouts = layouts.map(it => it.i === layout.i ? layout : it)
    setLayouts(newLayouts);
  }

  return layout
    ? <div className='LayoutInspector'>
      <span className='row'>x
        <input type="number" value={layout.x.toString()}
               onChange={event => {
                 updateLayouts({...layout, x: parseInt(event.target.value)})
               }}/>
      </span>
      <span className='row'>y
        <input type="number" value={layout.y.toString()}
               onChange={event => {
                 updateLayouts({...layout, y: parseInt(event.target.value)})
               }}/>
      </span>
      <span className='row'>w
        <input type="number" value={layout.w.toString()}
               onChange={event => {
                 updateLayouts({...layout, w: parseInt(event.target.value)})
               }}/>
      </span>
      <span className='row'>h
        <input type="number" value={layout.h.toString()}
               onChange={event => {
                 updateLayouts({...layout, h: parseInt(event.target.value)})
               }}/>
      </span>
    </div>
    : null;
}
