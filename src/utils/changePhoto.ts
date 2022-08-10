export const changePhoto = (e: React.ChangeEvent, funcField: (field: string, value: any) => void, nameField: string, setState: (result: string) => void): void => {
  const target = e.currentTarget as HTMLInputElement;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    if (fileReader.readyState === 2) {
      funcField(nameField, fileReader.result);
      setState(fileReader.result as string);
    }
  };
  fileReader.readAsDataURL(target.files![0]);
};