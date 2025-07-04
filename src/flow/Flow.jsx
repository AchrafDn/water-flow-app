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
    import Link2 from './nodes/Link2';
    import BacEau from './nodes/BacEau';
    import TransparentNode from './nodes/TransparentNode';
    import TransparentNode2 from './nodes/TransparentNode2';
    import FactoryContainer from './nodes/FactorySite';
    import OcpFactory from './nodes/OcpFactory';
    import DesltSite from './nodes/DesltSite';
    import DesltVille from './nodes/DesltVille';
    import EauPotable from './nodes/EauPotable';
    const nodeTypes = {
    bassin1: BassinPermeat,
    stock1: StockEauDeslt,
    link1: Link1,
    link2: Link2,
    baceau: BacEau,
    aistats: TransparentNode,
    orangestats: TransparentNode2,
    factory: FactoryContainer,
    ocp: OcpFactory,
    desltSite: DesltSite,
    desltVille: DesltVille,
    eaupotable: EauPotable,
    };

    const initialNodes = [
        {
            id:'1',
            position: { x: -80, y:94},
            type: 'bassin1',
            data: { 
                label: 'Bassin permeat',
                leftNumber: 35,
                rightNumber: 50,
                progress: 70,
            },
            draggable: false,
            connectable: true
        },
        {
            id:'100',
            position: { x: 180, y:162},
            type: 'link1',
            data: {},
            draggable: false,
            connectable: false,
        },
        {
            id:'101',
            position: { x: 180, y:372},
            type: 'link2',
            data: {},
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
        {
            id: '4',
            position: { x: 670, y:102 },
            type: 'baceau',
            data: { label: 'Bac Eau MP1', leftNumber: 10, rightNumber: 20, progress: 40, size: 'medium' },
            draggable: false,
            connectable: false,
        },
        {
            id: '5',
            position: { x: 670, y: -40 },
            type: 'baceau',
            data: { label: 'Bac Eau MC', leftNumber: 12, rightNumber: 22, progress: 60, size: 'small' },
            draggable: false,
            connectable: false,
        },
        {
            id: '6',
            position: { x: 670, y: 262 },
            type: 'baceau',
            data: { label: 'Bac Eau MP2', leftNumber: 5, rightNumber: 15, progress: 30, size: 'large' },
            draggable: false,
            connectable: false,
        },
        {
            id: '7',
            position: { x: 1040, y: -45},
            type: 'factory',
            data: {},
            draggable: false,
            connectable: false,
        },
        {
            id: '8',
            position: { x: 1140, y: -30},
            type: 'ocp',
            data: { 
                label: 'MC',
            },
            draggable: false,
            connectable: false,
        },
        {
            id: '9',
            position: { x: 1040, y: 107},
            type: 'factory',
            data: {},
            draggable: false,
            connectable: false,
        },
        {
            id: '10',
            position: { x: 1140, y: 122},
            type: 'ocp',
            data: {label: 'MP1'},
            draggable: false,
            connectable: false,
        },
        {
            id: '11',
            position: { x: 1040, y: 275},
            type: 'factory',
            data: { label: 'MP1'},
            draggable: false,
            connectable: false,
        },
        {
            id: '12',
            position: { x: 1140, y: 290},
            type: 'ocp',
            data: { label: 'MP2'},
            draggable: false,
            connectable: false,
        },
        {
            id: '13',
            position: {x:-120, y:-125},
            type: 'desltSite',
            data : {label: "Deslt Site"},
            draggable: false,
            connectable: true
        },
        {
            id: '14',
            position: {x:-150, y:300},
            type: 'desltVille',
            data : {label: "Deslt Ville"},
            draggable: false,
            connectable: true
        },
        {
            id:'29',
            position: { x: 90, y: 122 },
            type: 'orangestats',
            data: { Number: 4850 },
        },
        {
            id:'30',
            position: { x: 90, y:145 },
            type: 'aistats',
            data: { Number: 4850 },
        },
        {
            id:'43',
            position: { x: 70, y: 327 },
            type: 'orangestats',
            data: { Number: 4850 },
        },
        {
            id:'44',
            position: { x: 70, y:350 },
            type: 'aistats',
            data: { Number: 4850 },
        },
        {
            id:'45',
            position: { x: 225, y: 327 },
            type: 'orangestats',
            data: { Number: 4850 },
        },
        {
            id:'46',
            position: { x: 225, y:350 },
            type: 'aistats',
            data: { Number: 4850 },
        },
        {
            id:'28',
            position: { x: 210, y: 122 },
            type: 'orangestats',
            data: { Number: 1250 },
        },
        {
            id:'31',
            position: { x: 210, y:145 },
            type: 'aistats',
            data: { Number: 1250 },
        },
        {
            id:'27',
            position: { x: 440, y: 122 },
            type: 'orangestats',
            data: { Number: 1650 },
        },
        {
            id:'32',
            position: { x: 440, y:145 },
            type: 'aistats',
            data: { Number: 1650 },
        },
        {
            id:'26',
            position: { x: 580, y: 122 },
            type: 'orangestats',
            data: { Number: 1950 },
        },
        {
            id:'33',
            position: { x: 580, y:145 },
            type: 'aistats',
            data: { Number: 1950 },
        },
        {
            id:'25',
            position: { x: 580, y: 370 },
            type: 'orangestats',
            data: { Number: 3200 },
        },
        {
            id:'34',
            position: { x: 580, y:345},
            type: 'aistats',
            data: { 
                Number: 3200,
            },
            draggable: false,
            connectable: false,
        },
        {
            id:'24',
            position: { x: 580, y: -28 },
            type: 'orangestats',
            data: { Number: 2100 },
        },
        {
            id:'35',
            position: { x: 580, y:-5 },
            type: 'aistats',
            data: { Number: 2100 },
        },
        {
            id:'23',
            position: { x: 850, y: 92 },
            type: 'orangestats',
            data: { Number: 1800 },
        },
        {
            id:'36',
            position: { x: 850, y:115 },
            type: 'aistats',
            data: { Number: 1800 },
        },
        {
            id:'22',
            position: { x: 850, y: 260 },
            type: 'orangestats',
            data: { Number: 2800 },
        },
        {
            id:'37',
            position: { x: 850, y:285},
            type: 'aistats',
            data: { 
                Number: 2800,
            },
            draggable: false,
            connectable: false,
        },
        {
            id:'21',
            position: { x: 850, y: -58 },
            type: 'orangestats',
            data: { Number: 1400 },
        },
        {
            id:'38',
            position: { x: 850, y:-35 },
            type: 'aistats',
            data: { Number: 1400 },
        },
        {
            id:'19',
            position: { x: 1050, y: 122 },
            type: 'orangestats',
            data: { Number: 1500 },
        },
        {
            id:'39',
            position: { x: 1050, y:145 },
            type: 'aistats',
            data: { Number: 1500 },
        },
        {
            id:'18',
            position: { x: 1050, y: 290 },
            type: 'orangestats',
            data: { Number: 2400 },
        },
        {
            id:'40',
            position: { x: 1050, y:315},
            type: 'aistats',
            data: { 
                Number: 2400,
            },
            draggable: false,
            connectable: false,
        },
        {
            id:'17',
            position: { x: 1050, y: -28 },
            type: 'orangestats',
            data: { Number: 1750 },
        },
        {
            id:'41',
            position: { x: 1050, y:-5 },
            type: 'aistats',
            data: { Number: 1750 },
        },
        {
            id: '42',
            position: {x:330, y:315},
            type: 'eaupotable',
            data : {label: "Eau Potable", leftNumber: 10, rightNumber: 20, progress: 40,},
            draggable: false,
            connectable: true
        },
        

    ];

    const initialEdges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e3-7',
            source: '2',
            target: '3',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e5-7',
            source: '5',
            target: '7',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e7-8',
            source: '7',
            target: '8',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2, strokeDasharray: '5,5' },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e4-9',
            source: '4',
            target: '9',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e9-10',
            source: '9',
            target: '10',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2, strokeDasharray: '5,5' },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e6-11',
            source: '6',
            target: '11',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2 },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            },
        },
        {
            id: 'e11-12',
            source: '11',
            target: '12',
            animated: true,
            style: { stroke: '#2563eb', strokeWidth: 2, strokeDasharray: '5,5' },
            markerEnd: {
            type: 'arrow',
            width: 15,
            height: 15,
            color: '#2563eb',
            }
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4',
            sourceHandle: 'right',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e3-5',
            source: '3',
            target: '5',
            sourceHandle: 'top',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e3-6',
            source: '3',
            target: '6',
            sourceHandle: 'bottom',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e13-1',
            source: '13',
            target: '1',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e14-101',
            source: '14',
            target: '101',
            targetHandle: 'left',
            animated: true,
            style: {
                
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e100-101',
            source: '100',
            target: '101',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e3-42',
            source: '3',
            target: '41',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 35
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        },
        {
            id: 'e101-42',
            source: '101',
            target: '42',
            animated: true,
            style: {
                stroke: '#2563eb',
                strokeWidth: 2
            },
            markerEnd: {
                type: 'arrow',
                width: 15,
                height: 15,
                color: '#2563eb',
            }
        }

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
                    <Background variant="dots" gap={15} size={1.5} color="#CDCDCE" />
                </ReactFlow>
            </div>
        );
    }
