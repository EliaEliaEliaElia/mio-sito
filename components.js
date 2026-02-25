// Funzione per inserire Header e Footer in automatico
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Definiamo l'Header (il tuo Menu)
    const headerHTML = `
    <header style="background: white; padding: 1rem 0; border-bottom: 1px solid #e2e8f0;">
        <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="logo" style="font-weight: bold; font-size: 1.2rem; color: var(--primary);">⚡ ToolFast</div>
            <ul style="list-style: none; display: flex; gap: 20px;">
                <li><a href="../index.html" style="text-decoration: none; color: var(--text);">Home</a></li>
                <li><a href="letters-generator.html" style="text-decoration: none; color: var(--text);">Random</a></li>
            </ul>
        </nav>
    </header>
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