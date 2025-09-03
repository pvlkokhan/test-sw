export function getIconPath(iconName: string): string {
    return `/src/assets/icons/${iconName}.svg`;
}

export function getBgPath(bgName: string): string {
    return `/src/assets/bg/${bgName}.png`;
}

export function chunkArrayOneTwoOne<T>(array: T[]): T[][] {
    const result: T[][] = [];
    let i = 0;

    while (i < array.length) {
        const val = i % 2 === 0 ? 1 : 2;
        result.push(array.slice(i, i + val));
        i += val;
    }

    return result;
}

export function arrayOfArrays<T extends object>(array: T[]): any[][] {
    return array.map(obj => [obj]);
} 