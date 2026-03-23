
export function secondsConverter(sec:number): string{
    const minutes = Math.floor(sec/60);
    const seconds = sec % 60;
    return `${minutes} : ${seconds > 10 ? seconds : "0" + seconds}`
}