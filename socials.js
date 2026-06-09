document.getElementById("socials-btn").addEventListener("click", () => {
    const popup = window.open("", "SocialsWindow", "width=600,height=400");

    const socialsText = 
`Loading socials...

> Instagram: https://www.instagram.com/cshea1024
> GitHub: https://github.com/The-R34per
> LinkedIn: https://www.linkedin.com/in/collinshea/
> Linktree: https://linktr.ee/CollinShea
> Email: collin.shea1015@gmail.com

Socials completed.`;

    popup.document.write(`
        <style>
            body {
                background: black;
                color: #00ff88;
                font-family: "Courier New", monospace;
                padding: 20px;
                white-space: pre-wrap;
                text-shadow: 0 0 8px #00ff88;
            }
        </style>
        <pre id="typebox"></pre>
    `);

    const box = popup.document.getElementById("typebox");

    let i = 0;
    function type() {
        if (i < socialsText.length) {
            box.textContent += socialsText.charAt(i);
            i++;
            setTimeout(type, 25);
        }
    }

    type();
});
