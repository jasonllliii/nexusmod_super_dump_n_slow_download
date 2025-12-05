// copy the script to browser console and run
function delay(time_ms) {
    return new Promise(resolve => setTimeout(resolve, time_ms));
}
function click_download(win) {
    win.document.querySelector("mod-file-download").shadowRoot.querySelector("#upsell-cards > div > button").click();
}
var links = [...document.querySelector(".accordion").querySelectorAll("a.btn.inline-flex")];
(async () => {
    let idx_start = 0;
    let idx_end = links.length;
    console.log(`${idx_start} to ${idx_end}`);
    for (let i = idx_start; i < idx_end; i++) {
        const link = links[i];
        console.log(i, ")\tdownload\n", link);
        let tmp_win = open(link, "_blank");
        await delay(1000);
        click_download(tmp_win);
        await delay(6000);
        tmp_win.close();
    }
})();
