import React from 'react';
import { Handle, Position } from '@xyflow/react';
import Bassin1Icon from '../../assets/BassinPermeat.svg';
import './BassinPermeat.css';

export default function BassinPermeat({ data }) {
    return (
        <div className="bassin-permeat-node">
            <div className="node-label">
                {data.label}
            </div>
            
            <img 
                src={Bassin1Icon} 
                alt="Bassin Permeat Icon"
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
                position={Position.Top}
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
