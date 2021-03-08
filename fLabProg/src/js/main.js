import {generate} from "./helpers";
import {strf} from "./strf";
import {readFile} from "./preprocess";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"
    readFile("../assets/txt.txt")
    // generate();
     strf();
});