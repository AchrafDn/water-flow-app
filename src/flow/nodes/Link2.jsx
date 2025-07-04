import React from 'react';
import { Handle, Position } from '@xyflow/react';
import './Link2.css';

export default function Link2({ data }) {
    return (
        <div className="link1-node" style={{
            width: '20px',
            height: '20px',
            background: '#2563eb'
        }}>
            {/* Target handles */}
            <Handle
                type="target"
                position={Position.Top}
                id="top-target"
                style={{ background: '#2563eb', border: '1px solid #2563eb' }}
            />
            <Handle
                type="target"
                position={Position.Left}
                id="left"
                style={{ background: '#2563eb', border: '1px solid #2563eb' }}
            />
            

            <Handle
                type="source"
                position={Position.Right}
                id="bottom"
                style={{ background: '#2563eb', border: '1px solid #2563eb' }}
            />
        </div>
    );
}
