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
        /* Reset liste per togliere i puntini */
        .nav-container ul, 
        .nav-container li, 
        .dropdown, 
        .dropdown li { 
            list-style: none !important; 
            margin: 0; 
            padding: 0; 
        }

        .nav-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            background: white; 
            padding: 0.8rem 1.5rem; 
            border-bottom: 1px solid #e2e8f0; 
            position: relative; 
        }

        .nav-menu { display: flex; gap: 20px; align-items: center; }
        .nav-menu a { text-decoration: none; color: var(--text); font-weight: 500; font-size: 0.95rem; }

        /* Dropdown Base */
        .nav-item { position: relative; }
        .dropdown { 
            display: none; 
            position: absolute; 
            top: 100%; 
            left: 0; /* Di base si aprono a destra */
            background: white; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
            border: 1px solid #e2e8f0; 
            border-radius: 8px; 
            padding: 0.5rem 0; 
            min-width: 200px; 
            z-index: 1000; 
        }

        /* SOLUZIONE: L'ultimo dropdown si apre a SINISTRA per non uscire dallo schermo */
        .nav-menu > li:last-child .dropdown {
            left: auto;
            right: 0;
        }

        .dropdown li a { padding: 10px 16px; display: block; font-size: 0.9rem; border: none !important; }
        .dropdown li a:hover { background: #f8fafc; color: var(--primary); }
        .nav-item:hover .dropdown { display: block; }

        /* Hamburger Menu */
        .menu-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; border: none; background: none; }
        .menu-toggle span { width: 25px; height: 3px; background: var(--text); border-radius: 2px; }

        @media (max-width: 768px) {
            .menu-toggle { display: flex; }
            .nav-menu { 
                display: none; 
                flex-direction: column; 
                position: absolute; 
                top: 100%; 
                left: 0; 
                width: 100%; 
                background: white; 
                box-shadow: 0 10px 15px rgba(0,0,0,0.05);
            }
            .nav-menu.active { display: flex; }
            .dropdown { position: static; box-shadow: none; border: none; background: #f8fafc; display: block; }
            /* Su mobile l'ultimo lo riportiamo a sinistra normale */
            .nav-menu > li:last-child .dropdown { left: 0; right: auto; }
        }
    </style>

    <nav class="nav-container">
        <div class="logo">
            <a href="index.html">
                <img src="assets/img/Logo.png" alt="ToolFast Logo" style="height:40px; border-radius:8px;">
            </a>
        </div>
        
        <button class="menu-toggle" id="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-menu" id="nav-list">
            <li><a href="index.html">Home</a></li>
            
            <li class="nav-item">
                <a href="#">Random ▾</a>
                <ul class="dropdown">
                    <li><a href="letters-generator.html">Letters Generator</a></li>
                    <li><a href="numbers-generator.html">Numbers Generator</a></li>
                    <li><a href="password-generator.html">Password Generator</a></li>
                    <li><a href="name-picker.html">Name Picker</a></li>
                    <li><a href="dice-roller.html">Dice Roller</a></li>
                    <li><a href="heads-or-tails.html">Heads Or Tails</a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="#">Converters ▾</a>
                <ul class="dropdown">
                    <li><a href="aspect-ratio-converter.html">Aspect Ratio Converter</a></li>
                    <li><a href="base-converter.html">Base Converter</a></li>
                    <li><a href="units-ratio-converter.html">Units Converter</a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="#">Text ▾</a>
                <ul class="dropdown">
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

    // Aggiungi questo subito dopo l'inserimento dell'HTML dell'header
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Animazione opzionale hamburger
            menuBtn.classList.toggle('open');
        });
    }

    // 3. Inseriamoli nelle pagine dove esistono i tag <header> e <footer>
    if(document.querySelector('header')) document.querySelector('header').innerHTML = headerHTML;
    if(document.querySelector('footer')) document.querySelector('footer').innerHTML = footerHTML;
});