export const nearestSq = (n: number): number => {
    let i = 1;
    while(true) {
        const square = i ** 2;
        if(i * i >= n) {
            const diff1 = Math.abs((i - 1) ** 2 - n)
            const diff2 = Math.abs(square - n)
            if(diff1 < diff2) return (i - 1) ** 2
            return square
        }
    }
}
