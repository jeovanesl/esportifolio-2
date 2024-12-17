function enviarWhatsApp() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^[0-9]{8,15}$/;

    if (!nome || !email || !telefone || !mensagem) {
        alert('Preencha todos os campos antes de enviar.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    const texto = `Olá, gostaria de entrar em contato! Nome: ${nome} Email: ${email} Telefone: ${telefone} Mensagem: ${mensagem}`;
    const numeroWhatsApp = '5575999105877';
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;

    const novaJanela = window.open(link, '_blank');
    if (!novaJanela) {
        alert('Não foi possível abrir o WhatsApp. Verifique as configurações do navegador.');
    }
}
