export interface IDepartment<T> {
    name: string;
    code: number;
    getDept(): Promise<T>;
}
