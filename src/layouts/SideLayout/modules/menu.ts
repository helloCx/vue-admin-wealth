interface MenuItem {
    name: string,
    code: string,
    child: []
}

export default class implements Menu {
    menu: MenuItem[] = []
    constructor() {
    }
}

