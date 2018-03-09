export class UploadImage {
    pastebin_api_key: string;
    filename: string;
    constructor (_pastebin_api_key: string, _filename: string) {
        this.pastebin_api_key = _pastebin_api_key;
        this.filename = _filename;
    }
}
