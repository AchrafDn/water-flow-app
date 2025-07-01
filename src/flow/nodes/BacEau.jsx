import React from 'react';
import { Handle, Position } from '@xyflow/react';
import BacEauIcon from '../../assets/BacEau.svg'; // Replace with your actual icon
import './BacEau.css';

export default function BacEau({ data }) {
    const sizeClass = data.size ? `bac-eau-node-${data.size}` : '';
    return (
        <div className={`bac-eau-node ${sizeClass}`}>
            {/* Section 1: Label */}
            <div className="node-label">
                {data.label}
            </div>

            {/* Section 2: SVG/Icon */}
            <img 
                src={BacEauIcon} 
                alt="Bac Eau Icon"
                className="node-icon"
            />

            {/* Section 3: Two Values with Units */}
            <div className="node-values">
                <div className="node-value primary">
                    <span className="value-number">{data.leftNumber}</span>
                    <span className="value-unit">m³/h</span>
                </div>
                <div className="node-value secondary">
                    <span className="value-number">{data.rightNumber}</span>
                    <span className="value-unit">m³/h</span>
                </div>
            </div>

            {/* Handles */}
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#2563eb' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#2563eb' }}
            />
        </div>
    );
}
