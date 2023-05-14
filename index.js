setTimeout(()=> {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block"
}, 1000)

const root = getComputedStyle(document.documentElement);
const ColorSecondary = root.getPropertyValue('--color-secondary');
const ColorPrimary = root.getPropertyValue('--color-primary')
function active(a, b, c, d, e) {
    document.getElementById(a).style.borderBottom = "2px solid " + ColorSecondary;
    document.getElementById(b).style.borderBottom = "2px solid " + ColorPrimary;
    document.getElementById(c).style.borderBottom = "2px solid " + ColorPrimary;
    document.getElementById(d).style.borderBottom = "2px solid " + ColorPrimary;
    document.getElementById(e).style.borderBottom = "2px solid " + ColorPrimary
}

function show(a, b, c, d, e) {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
    document.getElementById(c).style.display = "none";
    document.getElementById(d).style.display = "none";
    document.getElementById(e).style.display = "none"
}

function a1() {
    active("a1", "a2", "a3", "a4", "a5", "a6");
    show("home", "news", "android", "windows", "tools")
}

function a2() {
    active("a2", "a1", "a3", "a4", "a5", "a6");
    show("news", "home", "android", "windows", "tools")
}

function a3() {
    active("a3", "a2", "a1", "a4", "a5", "a6");
    show("android", "home", "news", "windows", "tools")
}

function a4() {
    active("a4", "a1", "a3", "a2", "a5", "a6");
    show("windows", "home", "news", "android", "tools")
}

function a5() {
    active("a5", "a2", "a3", "a4", "a1", "a6");
    show("tools", "home", "news", "android", "windows")
}

function a6() {
    active("a6", "a1", "a3", "a4", "a5", "a2");
    show("home", "news", "android", "windows", "tools")
}

function open_prv() {
    document.getElementById("prvbox").style.display = "block"
}

function close_prv() {
    document.getElementById("prvbox").style.display = "none"
}