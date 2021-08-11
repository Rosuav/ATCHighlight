import {on, fix_dialogs} from "https://rosuav.github.io/shed/chocfactory.js";
import "https://cdn.jsdelivr.net/npm/comfy.js/dist/comfy.min.js"; const ComfyJS = window.ComfyJS;
const {P, IMG, FIGURE, FIGCAPTION} = choc;
let participantdata = null;

fetch("https://sikorsky.rosuav.com/static/atc-" + window.location.hash.slice(1) + ".json")
	.then(r => r.json())
	.then(data => participantdata = data)
	.catch(e => set_content("main", P("Can't load JSON file, check ID")));

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	if (!participantdata) return;
	if (user !== "Rosuav") return;
	const m = /maayaBrush ([^ ]+) is one of our #100Artists/.exec(message);
	if (!m) return;
	const artist = m[1], link = participantdata.images[m[1]];
	if (!link) return;
	set_content("main", FIGURE({className: "show"}, [
		FIGCAPTION("ATC from " + artist),
		IMG({src: link}),
	]));
	setTimeout(() => DOM("main figure").classList.remove("show"), 10000);
}
ComfyJS.Init("mrsoef5");
