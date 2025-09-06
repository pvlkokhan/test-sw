export function getIconPath(iconName: string): string {
    return `${import.meta.env.BASE_URL}/icons/${iconName}.svg`;
}

export function getBgPath(bgName: string): string {
    return `${import.meta.env.BASE_URL}/bg/${bgName}.webp`;
}