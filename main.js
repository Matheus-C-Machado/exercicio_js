$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style= display: none ></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver a imagem em tamaho real">
                Ver a imagem em tamaho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereço-imagem-nova').val()
    })
})
