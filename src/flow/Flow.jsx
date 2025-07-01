import { useState } from 'react';
import { 
    ReactFlow,
    MiniMap,
    Controls,
    Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './Flow.css';
import BassinPermeat from './nodes/BassinPermeat';
import StockEauDeslt from './nodes/StockEauDeslt';
import Link1 from './nodes/Link1';
import BacEau from './nodes/BacEau';
import TransparentNode from './nodes/TransparentNode';

const nodeTypes = {
  bassin1: BassinPermeat,
  stock1: StockEauDeslt,
  link1: Link1,
  baceau: BacEau,
  aistats: TransparentNode,
};

const initialNodes = [
    {
        id:'1',
        position: { x: 50, y:94},
        type: 'bassin1',
        data: { 
            label: 'Bassin permeat',
            leftNumber: 35,
            rightNumber: 50,
            progress: 70,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'7',
        position: { x: 200, y:125},
        type: 'aistats',
        data: { 
            Number: 50,
        },
        draggable: false,
        connectable: false,
    },
        {
        id:'8',
        position: { x: 440, y:125},
        type: 'aistats',
        data: { 
            Number: 50,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'9',
        position: { x: 580, y:125},
        type: 'aistats',
        data: { 
            Number: 50,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'10',
        position: { x: 580, y:345},
        type: 'aistats',
        data: { 
            Number: 50,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'11',
        position: { x: 580, y:-35},
        type: 'aistats',
        data: { 
            Number: 50,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'2',
        position: { x: 300, y:100},
        type: 'stock1',
        data: { 
            label: 'Stock Eau Deslt',
            leftNumber: 35,
            rightNumber: 50,
            progress: 70,
        },
        draggable: false,
        connectable: false,
    },
    {
        id:'3',
        position: { x: 550, y:162},
        type: "link1",
        data: {},
        draggable: false,
        connectable: false,
    },
    // 👉 Node above Link1 (spaced)
  {
    id: '5',
    position: { x: 670, y: -40 },
    type: 'baceau',
    data: { label: 'Bac Eau MC', leftNumber: 12, rightNumber: 22, progress: 60, size: 'small' },
    draggable: false,
    connectable: false,
    width: 150,
    height: 100,
  },
    {
    id: '4',
    position: { x: 670, y:102 },
    type: 'baceau',
    data: { label: 'Bac Eau MP1', leftNumber: 10, rightNumber: 20, progress: 40, size: 'medium' },
    draggable: false,
    connectable: false,
    width: 150,
    height: 100,
  },
  
  // 👉 Node below Link1 (spaced)
  {
    id: '6',
    position: { x: 670, y: 262 },
    type: 'baceau',
    data: { label: 'Bac Eau MP2', leftNumber: 5, rightNumber: 15, progress: 30, size: 'large' },
    draggable: false,
    connectable: false,
    width: 150,
    height: 100,
  }
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#2563eb', strokeWidth: 2 },
        width: 150,
        height: 100,
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        style: { stroke: '#2563eb', strokeWidth: 2 },
        width: 150,
        height: 100,
    },
    // Right output of Link1
  { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right', animated: true, style: { stroke: '#2563eb', strokeWidth: 2 }},
  
  // Top output of Link1
  { id: 'e3-5', source: '3', target: '5', sourceHandle: 'top', animated: true, style: { stroke: '#2563eb', strokeWidth: 2 }},
  
  // Bottom output of Link1
  { id: 'e3-6', source: '3', target: '6', sourceHandle: 'bottom', animated: true, style: { stroke: '#2563eb', strokeWidth: 2 }},

];

export default function Flow() {
    const [nodes] = useState(initialNodes);
    const [edges] = useState(initialEdges);

    return (
        <div style={{width: '100%', height: '100%'}}>
            <ReactFlow 
                nodes={nodes} 
                edges={edges} 
                nodeTypes={nodeTypes} 
                fitView
            >
                <Controls />
                
                {/* Refresh Controls Panel */}
                <div className="refresh-controls">
                    <button className="refresh-btn auto-refresh" title="Auto-refresh every 15 minutes">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        <span>Auto 15min</span>
                    </button>
                    
                    <button className="refresh-btn manual-refresh" title="Manual refresh">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                            <path d="M21 3v5h-5"/>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                            <path d="M3 21v-5h5"/>
                        </svg>
                        <span>Refresh</span>
                    </button>
                </div>
                
                <MiniMap 
                    nodeColor={(node) => {
                        switch (node.type) {
                            case 'bassin1': return '#10b981';
                            case 'stock1': return '#f59e0b';
                            case 'baceau': return '#3b82f6';
                            case 'link1': return '#8b5cf6';
                            case 'aistats': return '#6b7280';
                            default: return '#3b82f6';
                        }
                    }}
                    nodeStrokeColor="#000000"
                    nodeStrokeWidth={2}
                    nodeBorderRadius={4}
                    maskColor="rgba(0, 0, 0, 0.1)"
                />
                <Background variant="dots" gap={15} size={1.5} color="#CDCDCE" />
            </ReactFlow>
        </div>
    );
}