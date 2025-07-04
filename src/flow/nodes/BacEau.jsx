import React from 'react';
import { Handle, Position } from '@xyflow/react';
import BacEauIcon from '../../assets/BacEau.svg'; // Replace with your actual icon
import './BacEau.css';

export default function BacEau({ data }) {
    const sizeClass = data.size ? `bac-eau-node-${data.size}` : '';
    return (
        <div className={`bac-eau-node ${sizeClass}`}>
            <div className="node-label">
                {data.label}
            </div>

            <img 
                src={BacEauIcon} 
                alt="Bac Eau Icon"
                className="node-icon"
            />

            <div className="node-values">
                <div className="node-value primary">
                    <span className="value-number">{data.leftNumber}</span>
                    <span className="value-unit">%</span>
                </div>
                <div className="node-value secondary">
                    <span className="value-number">{data.rightNumber}</span>
                    <span className="value-unit">%</span>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#2563eb' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#2563eb', top: 'calc(50% - 30px)' }}
            />
        </div>
    );
}
