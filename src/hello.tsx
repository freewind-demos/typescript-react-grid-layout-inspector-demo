import React, {useState, ChangeEvent} from 'react'
import GridLayout, {Layout} from 'react-grid-layout';
import LayoutInspector from './LayoutInspector';

import 'react-grid-layout/css/styles.css';
import './index.css';

export default function Hello() {
  const [layouts, setLayouts] = useState<Layout[]>([
    {i: 'a aa aa aa', x: 0, y: 0, w: 1, h: 2,},
    {i: 'b bb bb bb bb bb bb bb bb bb bb bb bb', x: 1, y: 0, w: 3, h: 2},
    {i: 'c', x: 4, y: 0, w: 1, h: 2},
  ]);

  function updateLayouts(event: ChangeEvent<HTMLTextAreaElement>) {
    const content = event.target.value;
    setLayouts(JSON.parse(content));
  }

  function findLayout(layoutKey: string): Layout {
    return layouts.find(it => it.i === layoutKey)!;
  }

  function updateLayout(layout: Layout): void {
    const newLayouts = layouts.map(it => it.i === layout.i ? layout : it)
    setLayouts(newLayouts);
  }

  return <div>
    <h1>Hello React</h1>
    <GridLayout className='layout' preventCollision={true} layout={layouts} cols={12} rowHeight={30} width={1200}
                onLayoutChange={setLayouts}>
      <div key='a aa aa aa'>A<LayoutInspector layout={findLayout('a aa aa aa')} updateLayout={updateLayout}/></div>
      <div key='b bb bb bb bb bb bb bb bb bb bb bb bb'>B<LayoutInspector layout={findLayout('b bb bb bb bb bb bb bb bb bb bb bb bb')} updateLayout={updateLayout}/></div>
      <div key='c'>C<LayoutInspector layout={findLayout('c')} updateLayout={updateLayout}/></div>
    </GridLayout>
    <textarea className='editor' onChange={updateLayouts} value={JSON.stringify(layouts, null, 4)}/>
  </div>
};
