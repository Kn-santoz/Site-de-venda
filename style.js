// ========== MENU HAMBURGER ==========
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animar ícone do hamburger (opcional)
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.style.backgroundColor = '#1f2937');
        });
    }

    // ========== FECHAR MENU AO CLICAR EM UM LINK ==========
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 700) {
                navLinks.classList.remove('active');
            }
        });
    });

    // ========== SCROLL SUAVE PARA LINKS INTERNOS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== "#") {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========== FORMULÁRIO DE CONTATO (SIMULAÇÃO) ==========
    const contatoForm = document.getElementById('contatoForm');
    const submitBtn = document.getElementById('formSubmit');
    
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio - apenas um alerta visual
            submitBtn.textContent = 'Enviado!';
            submitBtn.style.backgroundColor = '#9ca3af';
            submitBtn.style.borderColor = '#9ca3af';
            
            // Limpar campos (opcional)
            const inputs = this.querySelectorAll('input, textarea');
            inputs.forEach(input => input.value = '');
            
            // Restaurar botão após 2 segundos
            setTimeout(() => {
                submitBtn.textContent = 'Enviar mensagem';
                submitBtn.style.backgroundColor = '#1f2937';
                submitBtn.style.borderColor = '#1f2937';
            }, 2000);
        });
    }

    // ========== PLACEHOLDER PARA BOTÕES (HIPERLINKS FUTUROS) ==========
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const link = this.getAttribute('href');
            // Se for um link interno (#) já tratado pelo scroll suave
            // Se for externo ou javascript, apenas permitir comportamento padrão
            if (link && link !== '#' && !link.startsWith('#')) {
                // Manter comportamento padrão (para links reais)
                return;
            }
        });
    });

    // ========== AJUSTE DE RESPONSIVIDADE AO REDIMENSIONAR ==========
    window.addEventListener('resize', function() {
        if (window.innerWidth > 700) {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });

    // ========== NOVO: PREPARAR ÍCONES SOCIAIS ==========
    function prepararLinksSociais() {
        const socialIcons = document.querySelectorAll('.social-icon, .footer-social-icon');
        
        socialIcons.forEach(icon => {
            // Adiciona um atributo data-original-href para referência
            const social = icon.getAttribute('data-social');
            
            // Adiciona um placeholder visual para saber qual rede é
            icon.setAttribute('title', `Adicionar link do ${social}`);
            
            // Log no console para facilitar a localização
            console.log(`Ícone do ${social} pronto para link:`, icon);
        });
        
        console.log('✅ Ícones sociais preparados! Basta adicionar os links nos href="#".');
    }

    // ========== NOVO: SIMULAÇÃO DE CLIQUE EM ÍCONES SOCIAIS ==========
    function configurarCliqueSocial() {
        const socialIcons = document.querySelectorAll('.social-icon, .footer-social-icon');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('click', function(e) {
                // Se o href ainda for "#", impede o navegador de ir para o topo
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    
                    const social = this.getAttribute('data-social') || 'rede social';
                    
                    // Cria um alerta amigável (pode ser removido depois)
                    alert(`🔗 Link do ${social} ainda não configurado!\n\nPara adicionar: edite o href deste ícone no HTML.`);
                    
                    // Destaca o ícone no console para fácil localização
                    console.log(`👉 Ícone do ${social} aguardando link:`, this);
                }
            });
        });
    }

    // ========== EXECUTAR NOVAS FUNÇÕES ==========
    prepararLinksSociais();
    configurarCliqueSocial();
    
    console.log('✅ JavaScript carregado! Modelo pronto para personalização.');
});