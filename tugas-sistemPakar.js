const sumberList = [
    "komputer/laptop (VGA)",
    "komputer (DVI)",
    "komputer/laptop (HDMI)",
    "komputer (DP)",
    "komputer/laptop (USB-C)",
    "smartphone (USB-C)",
    "konsol game (Composite)",
    "konsol game (Component)",
    "konsol game (HDMI)",
    "konsol game (S-Video)",
    "konsol game (USB-C)",
    "dvr (VGA)",
    "dvr (HDMI)",
    "dvr (Composite)",
    "tv (VGA)",
    "tv (DVI)",
    "tv (HDMI)",
    "tv (Composite)",
    "tv (Component)",
    "tv (S-Video)",
    "dvd player (Composite)",
    "dvd player (Component)",
    "dvd (S-Video)",
    "dvd (HDMI)",
    "stb (Composite)",
    "stb (HDMI)",
    "handycam (S-Video)",
];

const tujuanList = [
    "monitor (HDMI)",
    "monitor (DVI)",
    "monitor (DP)",
    "monitor (VGA)",
    "monitor (USB-C)",
    "tv (VGA)",
    "tv (Component)",
    "tv (Composite)",
    "tv (HDMI)",
    "proyektor (VGA)",
    "proyektor (HDMI)",
    "proyektor (Composite)",
    "proyektor (Component)",
    "proyektor (DVI)",
    "proyektor (S-Video)",
    "tv (DVI)",
];

function fill(sel, arr) {
    sel.innerHTML = '<option value="">-- pilih --</option>' + arr.map((a) => `<option>${a}</option>`).join("");
}
fill(src, sumberList);
fill(dst, tujuanList);

function portOf(x) {
    return x.match(/\((.*?)\)/)[1].toUpperCase();
}

const direct = new Set([
    "HDMI→HDMI",
    "HDMI→DVI",
    "DVI→HDMI",
    "DP→DP",
    "DP→HDMI",
    "DP→DVI",
    "DP→VGA",
    "USB-C→USB-C",
    "USB-C→HDMI",
    "USB-C→DP",
    "USB-C→DVI",
    "USB-C→VGA",
    "DVI→DVI",
    "VGA→VGA",
    "COMPOSITE→COMPOSITE",
    "COMPONENT→COMPONENT",
    "S-VIDEO→S-VIDEO",
]);

const conv = {
    "HDMI→DP": "converter HDMI → DP",
    "HDMI→VGA": "converter HDMI → VGA",
    "DVI→VGA": "adapter DVI-I → VGA",
    "VGA→HDMI": "converter VGA → HDMI",
    "COMPOSITE→HDMI": "converter Composite → HDMI",
    "COMPONENT→HDMI": "converter Component → HDMI",
    "S-VIDEO→HDMI": "converter S-Video → HDMI",
};

function infer(a, b) {
    const A = portOf(a),
        B = portOf(b);
    const key = `${A}→${B}`;

    if (A === B) return `Gunakan kabel langsung ${A} → ${B}.`;
    if (direct.has(key)) return `Gunakan kabel langsung ${A} → ${B}.`;
    if (conv[key]) return `Gunakan <b>${conv[key]}</b>.`;
    return `Tidak ada kabel langsung. Gunakan converter ${A} → ${B}.`;
}

check.onclick = () => {
    if (!src.value || !dst.value) {
        out.classList.remove("hidden");
        out.innerHTML = "Pilih kedua perangkat.";
        return;
    }
    out.classList.remove("hidden");
    out.innerHTML = infer(src.value, dst.value);
};

reset.onclick = () => {
    src.value = "";
    dst.value = "";
    out.classList.add("hidden");
};
