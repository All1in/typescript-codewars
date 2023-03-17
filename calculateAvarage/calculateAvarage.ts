export function findAverage(array: number[]): number {
    if(array.length === 0) return 0
    return array.reduce((sum, num) => sum + num) / array.length
}
