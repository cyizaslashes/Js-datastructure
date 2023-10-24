class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        // Uncomment the following line for an undirected graph
        // this.adjList.get(vertex2).push(vertex1);
    }

    dfs(startingNode) {
        let visited = {};
        this.dfsHelper(startingNode, visited);
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        let neighbors = this.adjList.get(vertex);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
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

console.log('DFS Traversal:');
g.dfs('A');
