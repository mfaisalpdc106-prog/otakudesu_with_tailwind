// perangkat sumber
const sumberList = [
    "komputer/laptop (VGA)",
    "komputer/laptop (USB-C)",
    "komputer/laptop (HDMI)",
    "komputer (DVI)",
    "komputer (DP)",
    "konsol game (Composite)",
    "konsol game (Component)",
    "konsol game (HDMI)",
    "konsol game (S-Video)",
    "konsol game (USB-C)",
    "dvr (VGA)",
    "dvr (HDMI)",
    "dvr (Composite)",
    "dvd player (Composite)",
    "dvd player (Component)",
    "dvd (S-Video)",
    "dvd (HDMI)",
    "stb (Composite)",
    "stb (HDMI)",
];

// perangkat tujuan
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
    "tv (DVI)",
    "proyektor (VGA)",
    "proyektor (HDMI)",
    "proyektor (Composite)",
    "proyektor (Component)",
    "proyektor (DVI)",
    "proyektor (S-Video)",
];

// isi dropdown
function isiPilihan(selectBox, data) {
    selectBox.innerHTML =
        `<option value="">-- pilih --</option>` + data.map((item) => `<option>${item}</option>`).join("");
}

isiPilihan(src, sumberList);
isiPilihan(dst, tujuanList);

// ambil nama port dari teks, contoh : "(HDMI)"
function ambilPort(text) {
    return text.match(/\((.*?)\)/)[1].toUpperCase();
}

// kabel langsung
const kabelLangsung = new Set([
    "HDMI→HDMI",
    "DP→DP",
    "DVI→DVI",
    "VGA→VGA",
    "USB-C→USB-C",
    "COMPOSITE→COMPOSITE",
    "COMPONENT→COMPONENT",
    "S-VIDEO→S-VIDEO",
]);

// converter
const converterList = {

    // HDMI
    "HDMI→DVI": "converter HDMI → DVI",
    "DVI→HDMI": "converter DVI → HDMI",
    "HDMI→DP": "converter HDMI → DP",
    "DP→HDMI": "converter DP → HDMI",
    "HDMI→VGA": "converter HDMI → VGA",
    "VGA→HDMI": "converter VGA → HDMI",
    "HDMI→USB-C": "converter HDMI → USB-C",
    "USB-C→HDMI": "converter USB-C → HDMI",
    "HDMI→COMPOSITE": "converter HDMI → Composite",
    "COMPOSITE→HDMI": "converter Composite → HDMI",
    "HDMI→COMPONENT": "converter HDMI → Component",
    "COMPONENT→HDMI": "converter Component → HDMI",
    "HDMI→S-VIDEO": "converter HDMI → S-Video",
    "S-VIDEO→HDMI": "converter S-Video → HDMI",

    // DVI
    "DVI→DP": "converter DVI → DP",
    "DP→DVI": "converter DP → DVI",
    "DVI→VGA": "converter DVI → VGA",
    "VGA→DVI": "converter VGA → DVI",
    "DVI→USB-C": "converter DVI → USB-C",
    "USB-C→DVI": "converter USB-C → DVI",
    "DVI→COMPOSITE": "converter DVI → Composite",
    "COMPOSITE→DVI": "converter Composite → DVI",
    "DVI→COMPONENT": "converter DVI → Component",
    "COMPONENT→DVI": "converter Component → DVI",
    "DVI→S-VIDEO": "converter DVI → S-Video",
    "S-VIDEO→DVI": "converter S-Video → DVI",

    // DP
    "DP→VGA": "converter DP → VGA",
    "VGA→DP": "converter VGA → DP",
    "DP→USB-C": "converter DP → USB-C",
    "USB-C→DP": "converter USB-C → DP",
    "DP→COMPOSITE": "converter DP → Composite",
    "COMPOSITE→DP": "converter Composite → DP",
    "DP→COMPONENT": "converter DP → Component",
    "COMPONENT→DP": "converter Component → DP",
    "DP→S-VIDEO": "converter DP → S-Video",
    "S-VIDEO→DP": "converter S-Video → DP",

    // USB-C
    "USB-C→VGA": "converter USB-C → VGA",
    "VGA→USB-C": "converter VGA → USB-C",
    "USB-C→COMPOSITE": "converter USB-C → Composite",
    "COMPOSITE→USB-C": "converter Composite → USB-C",
    "USB-C→COMPONENT": "converter USB-C → Component",
    "COMPONENT→USB-C": "converter Component → USB-C",
    "USB-C→S-VIDEO": "converter USB-C → S-Video",
    "S-VIDEO→USB-C": "converter S-Video → USB-C",

    // composite
    "COMPOSITE→COMPONENT": "converter Composite → Component",
    "COMPONENT→COMPOSITE": "converter Component → Composite",
    "COMPOSITE→S-VIDEO": "converter Composite → S-Video",
    "S-VIDEO→COMPOSITE": "converter S-Video → Composite",

    // component
    "COMPONENT→S-VIDEO": "converter Component → S-Video",
    "S-VIDEO→COMPONENT": "converter S-Video → Component"
};

// logila
function cekKabel(sumber, tujuan) {
    const A = ambilPort(sumber);
    const B = ambilPort(tujuan);
    const kombinasi = `${A}→${B}`;

    // jika port sama atau ada kabel langsung
    if (A === B || kabelLangsung.has(kombinasi)) {
        return `Gunakan kabel langsung ${A} → ${B}.`;
    }

    // jika tersedia converter spesifik
    if (converterList[kombinasi]) {
        return `Gunakan <b>${converterList[kombinasi]}</b>.`;
    }

    // jika tidak tersedia converter spesifik (default)
    return `Gunakan converter ${A} → ${B}.`;
}

// combol cek
check.onclick = () => {

    // jika belum memilih perangkat sumber/tujuan
    if (!src.value || !dst.value) {
        out.classList.remove("hidden");
        out.innerHTML = "Pilih kedua perangkat.";
        return;
    }
    
    // jika sudah memilih perangkat sumber/tujuan
    out.classList.remove("hidden");
    out.innerHTML = cekKabel(src.value, dst.value);
};

// tombol reset
reset.onclick = () => {
    src.value = "";
    dst.value = "";
    out.classList.add("hidden");
};
