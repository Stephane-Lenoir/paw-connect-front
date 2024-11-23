export interface AddFormData extends FormData {
    get(name: string): string | null;
    append(name: string, value: string): void;
}