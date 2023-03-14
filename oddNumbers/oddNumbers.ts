const oddCount = (n: number): number => {
    let counter = 0;
    for (let i: number = 0; i < n; i++) {
        if(i % 2 === 1) counter += 1;
    }
    return counter
}
