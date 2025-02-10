import { itemKinds, technologyKinds, places, cities, dialog, set_at_index, index_set, toTitleCase} from "./gameData";

async function read_file(fileName) {
    fileObject = await fetch(fileName);
    fileText = await fileObject.text();
    document.getElementById("paragraphText").innerHTML = fileText
}

class item {
    constructor(kind) {
        if (itemKinds.has(kind)) {
            this.kind = toTitleCase(kind)
            this.id = itemKinds.indexOf(kind)

            if (this.id == -1) {
                throw("An item was created, but it has no index in itemKinds!")
            }
        }
    }
}

let e = item('incense')