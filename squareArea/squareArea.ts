export const squareArea = (num : number) : number =>  {
    const r: number = 2 * num / Math.PI
    return Math.round(r * r * 100) / 100
}
