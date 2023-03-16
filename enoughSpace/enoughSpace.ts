export const enough = (cap: number, on: number, wait: number): number => {
    const diff: number = cap - on;
    if(diff >= wait) return 0;
    return wait - diff
}
