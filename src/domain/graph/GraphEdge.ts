import type { NodeId } from './GraphNode';

export type EdgeId = string;

export interface GraphEdge {
  id: EdgeId;
  from: NodeId;
  to: NodeId;
  length: number;

  // visual / animation metadata
  color?: string;
  baseOpacity?: number;
  speed?: number;        
  enabled?: boolean;
}