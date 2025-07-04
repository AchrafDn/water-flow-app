import React from 'react';
import { Handle, Position } from '@xyflow/react';
import StockEau from '../../assets/StockEauDeslt.svg';
import './StockEauDeslt.css';

export default function StockEauDeslt({ data }) {
    return (
        <div className="stock-eau-deslt-node">
            <div className="node-label">
                {data.label}
            </div>
            
            <img 
                src={StockEau} 
                alt="Stock Deslt Icon"
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
                style={{ background: '#2563eb' }}
            />
        </div>
    );
}
