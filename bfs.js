class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1); // Uncomment for undirected graph
    }

    bfs(startingNode) {
        let visited = {};
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let currentVertex = queue.shift();
            console.log(currentVertex);

            let neighbors = this.adjList.get(currentVertex);

            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage
let g = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
g.addEdge('C', 'G');
g.addEdge('D', 'H');

console.log('BFS Traversal:');
g.bfs('A');
