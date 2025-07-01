import React from 'react';
import { Handle, Position } from '@xyflow/react';
import StockEau from '../../assets/StockEauDeslt.svg';
import './StockEauDeslt.css';

export default function StockEauDeslt({ data }) {
    return (
        <div className="stock-eau-deslt-node">
            {/* Section 1: Label */}
            <div className="node-label">
                {data.label}
            </div>
            
            {/* Section 2: SVG/Icon */}
            <img 
                src={StockEau} 
                alt="Stock Deslt Icon"
                className="node-icon"
            />
            
            {/* Section 3: Two Values with Units */}
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
            
            {/* Handles for connections (if needed) */}
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
