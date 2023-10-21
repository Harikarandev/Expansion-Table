export interface Row {
    id: string;
    text1: string;
    text2: string;
    children: Row[];
    selected: boolean;
}
