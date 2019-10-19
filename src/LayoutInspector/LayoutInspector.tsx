import {Layout} from 'react-grid-layout';
import React, {useState} from 'react';

import './LayoutInspector.pcss';

type LayoutInspectorProps = {
  layout: Layout,
  updateLayout: (layout: Layout) => void,
}

export default function LayoutInspector({layout, updateLayout}: LayoutInspectorProps) {

  return layout
    ? <div className='LayoutInspector'>
      <ul>
        <li className='row'>
          <button type='button' onClick={() => updateLayout({...layout, x: layout.x - 1})}>-</button>
          <span className='label'>x: {layout.x}</span>
          <button type='button' onClick={() => updateLayout({...layout, x: layout.x + 1})}>+</button>
        </li>
        <li className='row'>
          <button type='button' onClick={() => updateLayout({...layout, y: layout.y - 1})}>-</button>
          <span className='label'>y: {layout.y}</span>
          <button type='button' onClick={() => updateLayout({...layout, y: layout.y + 1})}>+</button>
        </li>
        <li className='row'>
          <button type='button' onClick={() => updateLayout({...layout, w: layout.w - 1})}>-</button>
          <span className='label'>width: {layout.w}</span>
          <button type='button' onClick={() => updateLayout({...layout, w: layout.w + 1})}>+</button>
        </li>
        <li className='row'>
          <button type='button' onClick={() => updateLayout({...layout, h: layout.h - 1})}>-</button>
          <span className='label'>height: {layout.h}</span>
          <button type='button' onClick={() => updateLayout({...layout, h: layout.h + 1})}>+</button>
        </li>
      </ul>
    </div>
    : null;
}
