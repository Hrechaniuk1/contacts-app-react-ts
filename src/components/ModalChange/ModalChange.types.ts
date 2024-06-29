export type ModalChangeProps = {
    isOpen: boolean,
    onSubmit: (data: {changeName: string, changeNumber: string}) => void,
    name: string,
    number: string,
    closeModal: (arg: boolean) => void
}

export type ChangeInitialValuesType = {
    changeName: string,
    changeNumber: string,
}