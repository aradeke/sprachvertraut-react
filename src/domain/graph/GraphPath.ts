import type { EdgeId } from './GraphEdge';

export interface GraphPath {
  id: string;
  edgeIds: EdgeId[];
  loop?: boolean;
}