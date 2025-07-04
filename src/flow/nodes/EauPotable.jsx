import React from 'react';
import { Handle, Position } from '@xyflow/react';
import EauIcon from '../../assets/EauPotable.svg';
import './EauPotable.css';

export default function EauPotable({ data }) {
    return (
        <div className="eau-potable-node">
            <div className="node-label">
                {data.label}
            </div>
            
            <img 
                src={EauIcon} 
                alt="Eau Potable Icon"
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
