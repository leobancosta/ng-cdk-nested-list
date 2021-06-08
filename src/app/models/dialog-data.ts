export class DialogData {
    name: string;
    subTitle: string;
    contextMenu: [];
    type: string;

    constructor(name: string, subTitle: string, contextMenu: [], type: string) {
        this.name = name;
        this.subTitle = subTitle;
        this.contextMenu = contextMenu;
        this.type = type;
    }
}
