/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import CryptoJS from "crypto-js";

export const useEncript = (arg: any, type?: string) => {
  const readDataEncrypted = () => {
    const listOfStorage = Object.keys(window.localStorage || {});
    let result: any = null;
    for (let index = 0; index < listOfStorage.length; index++) {
      const bytes = CryptoJS.AES.decrypt(
        listOfStorage[index],
        import.meta.env.VITE_ENCRYPT_KEY
      );
      const readBytes = bytes.toString(CryptoJS.enc.Utf8);
      if (readBytes === arg) {
        const keyLocalStorage = CryptoJS.AES.decrypt(
          window.localStorage.getItem(listOfStorage[index]),
          import.meta.env.VITE_ENCRYPT_KEY
        );
        const readBytes =
          type === "array"
            ? JSON.parse(keyLocalStorage.toString(CryptoJS.enc.Utf8))
            : keyLocalStorage.toString(CryptoJS.enc.Utf8);
        result = readBytes;
      }
    }
    return result;
  };
  const data = readDataEncrypted();
  const setDataEncrypted = (newItem: any) => {
    const listOfStorage = Object.keys(window.localStorage || {});
    const newEncrypKey = CryptoJS.AES.encrypt(
      arg,
      import.meta.env.VITE_ENCRYPT_KEY
    ).toString();
    let localkeyStorage: string = newEncrypKey;
    for (let index = 0; index < listOfStorage.length; index++) {
      const bytes = CryptoJS.AES.decrypt(
        listOfStorage[index],
        import.meta.env.VITE_ENCRYPT_KEY
      );
      const keyStorage = bytes.toString(CryptoJS.enc.Utf8);
      if (keyStorage === arg) {
        window.localStorage.removeItem(listOfStorage[index]);
        localkeyStorage = listOfStorage[index];
      }
    }
    const newValueEncryp = CryptoJS.AES.encrypt(
      type === "array" ? JSON.stringify(newItem) : newItem,
      import.meta.env.VITE_ENCRYPT_KEY
    ).toString();
    window.localStorage.setItem(localkeyStorage, newValueEncryp);
    localkeyStorage = "";
  };

  return { data, setDataEncrypted };
};
