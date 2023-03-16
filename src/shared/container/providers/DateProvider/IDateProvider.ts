export interface IDateProvider {
    compareInHours(start_date: Date, end_date: Date): number;
    compareInDays(start_date: Date, end_date: Date): number;
    convertToUTC(date: Date): string;
    dateNow(): Date;
    addDays(days: number): Date;
    addHoursExpiration(): Date;
    isDateBeforeNow(date: Date): boolean;
}

export const expiresMailTime = 3;
