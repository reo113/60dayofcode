function findCheapestPrice(n, flights, src, dst, k) {
    const graph = new Array(n).fill(null).map(() => [])
 
    for (const [from, to, price] of flights) {
        graph[from].push({ to, price });
    }

    const queue = [{ city: src, price: 0, stops: 0 }];
    const visited = new Array(n).fill(Infinity);

    while (queue.length > 0) {
        const { city, price, stops } = queue.shift();
        if (city === dst) {
            return price;
        }
        if (stops <= k) {
            for (const { to, price: nextPrice } of graph[city]) {
                const totalCost = price + nextPrice;
                if (totalCost < visited[to] && stops <= k) {
                    visited[to] = totalCost;
                    queue.push({ city: to, price: totalCost, stops: stops + 1 });
                }
            }
        }
    }

    return -1;
}



let n = 4, flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src = 0, dst = 3, k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));
