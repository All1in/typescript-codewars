export const twiceAsOld = (dadYearsOld: number, sonYearsOld: number): number => {
       const ageAtBirth = dadYearsOld - sonYearsOld
       return Math.abs(ageAtBirth - sonYearsOld)
}
