import { Handle, Position } from '@xyflow/react';

export default function FactoryContainer({ data }) {
  return (
    <div
      style={{
        border: '2px dashed #000',
        borderRadius: '8px',
        padding: '16px',
        width: '270px',
        height: '130px',

      }}
    >
    <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#2563eb', top: 'calc(50% - 30px)' }}
    />
    <Handle
        type="source"
        position={Position.Left}
    />
    </div>
  );
}