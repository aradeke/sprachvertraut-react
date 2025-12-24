import { NodeId, GraphNode} from './GraphNode';
import { EdgeId, GraphEdge} from './GraphEdge';
import { GraphPath} from './GraphPath';


export interface GraphState {
  nodes: Record<NodeId, GraphNode>;
  edges: Record<EdgeId, GraphEdge>;
  paths: Record<string, GraphPath>;

  // lookup helpers
  hexToNodes: Record<string, NodeId[]>;
  nodeToEdges: Record<NodeId, EdgeId[]>;
}