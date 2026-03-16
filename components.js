// === Google Analytics Globale ===
(function() {
    // 1. Carica lo script esterno di Google
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YFYPYREJHH";
    document.head.appendChild(gtagScript);

    // 2. Inizializza dataLayer e gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-YFYPYREJHH');
})();
// Funzione per inserire Header e Footer in automatico
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Definiamo l'Header (il tuo Menu)
    const headerHTML = `
    <style>
        /* Stili per il sottomenu */
        .nav-item { position: relative; }
        .dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 0.5rem 0;
            min-width: 160px;
            z-index: 1000;
        }
        .dropdown li a {
            padding: 8px 16px;
            display: block;
            color: var(--text);
            text-decoration: none;
            font-size: 0.9rem;
        }
        .dropdown li a:hover { background: #f8fafc; color: var(--primary); }
        .nav-item:hover .dropdown { display: block; } /* Mostra al passaggio del mouse */
    </style>

    <nav class="container" style="display: flex; justify-content: space-between; align-items: center;background: white; padding: 1rem 0; border-bottom: 1px solid #e2e8f0;">
        <div class="logo"><img src="assets/img/Logo.png" alt="ToolFast Logo" style="height:40px; border-radius:10px;"></div>
        <ul style="list-style: none; display: flex; gap: 20px; margin: 0; padding: 0;">
            <li><a href="index.html" style="text-decoration: none; color: var(--text);">Home</a></li>
            
            <li class="nav-item">
                <a href="#" style="text-decoration: none; color: var(--text);">Random</a>
                <ul class="dropdown" style="list-style: none; margin: 0; padding: 0;">
                    <li><a href="letters-generator.html">Letters Generator</a></li>
                    <li><a href="numbers-generator.html">Numbers Generator</a></li>
                    <li><a href="password-generator.html">Password Generator</a></li>
                    <li><a href="name-picker.html">Name Picker</a></li>
                    <li><a href="dice-roller.html">Dice Roller</a></li>
                    <li><a href="heads-or-tails.html">Heads Or Tails</a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="#" style="text-decoration: none; color: var(--text);">Converters</a>
                <ul class="dropdown" style="list-style: none; margin: 0; padding: 0;">
                    <li><a href="aspect-ratio-converter.html">Aspect Ratio Converter</a></li>
                    <li><a href="base-converter.html">Base Converter</a></li>
                    <li><a href="units-ratio-converter.html">Units Converter</a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="#" style="text-decoration: none; color: var(--text);">Text</a>
                <ul class="dropdown" style="list-style: none; margin: 0; padding: 0;">
                    <li><a href="case-converter.html">Case Converter</a></li>
                    <li><a href="lorem-ipsum.html">Lorem Ipsum</a></li>
                    <li><a href="word-character-counter.html">Word Character Counter</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    `;

    // 2. Definiamo il Footer
    const footerHTML = `
    <footer style="margin-top: 4rem; padding: 2rem 0; font-size: 0.9rem; color: var(--text-light); text-align: center;">
        <div class="container">
            <p>© 2026 ToolFast - Free Tools</p>
        </div>
    </footer>
    `;

    // 3. Inseriamoli nelle pagine dove esistono i tag <header> e <footer>
    if(document.querySelector('header')) document.querySelector('header').innerHTML = headerHTML;
    if(document.querySelector('footer')) document.querySelector('footer').innerHTML = footerHTML;
});