export type NodeId = string;

export interface GraphNode {
  id: NodeId;
  x: number;
  y: number;
  hexIds: string[]; // which hexes share this corner
}
