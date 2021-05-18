export function setStorage(key: string, value: any) {
    localStorage.setItem(key, value)
}

export function getSotrage(key: string): null | string {
    return localStorage.getItem(key)
}