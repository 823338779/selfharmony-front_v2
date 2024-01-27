export interface TipStruct {
    id: number,
    content: string,
    author: string,
    status: number
}
export interface PageCallBack {
    updateStatus: (id: number, status: number) => void
    refreshPage?: () => void
}

