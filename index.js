import {on, fix_dialogs} from "https://rosuav.github.io/shed/chocfactory.js";
import "https://cdn.jsdelivr.net/npm/comfy.js/dist/comfy.min.js"; const ComfyJS = window.ComfyJS;
const {LI, B} = choc;

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	DOM("#info").appendChild(LI([B(user), ": " + message]));
}
ComfyJS.Init("mrsoef5");
