export const descendingOrder = (n: number): number => {
    const converted: string = n.toString()
    const newArray: string[] = converted.split('')
    const sorted: string[] = newArray.sort()
    return Number(sorted.reverse().join(''))
}
