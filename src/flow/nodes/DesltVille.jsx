import { Handle, Position } from '@xyflow/react';
import DesltIcon from '../../assets/DesltSite.svg'; // Check if the path is correct

export default function DesltVille({ data }) {
  return (
    <div
      style={{
        border: '2px dashed #000',
        borderRadius: '8px',
        padding: '12px',
        width: '200px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#1f2937',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        {data.label}
      </div>
      <img
        src={DesltIcon}
        alt="Deslt Site"
        style={{
          width: '180px',
          height: '100px',
          marginBottom: '8px',
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#2563eb' }}
      />
    </div>
  );
}
