// URL da API para buscar imagens de gatos
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

// Usando a Fetch API para obter os dados
fetch(url)
  .then(response => {
    // Verificar se a resposta é bem-sucedida
    if (!response.ok) {
      // Se a resposta não for bem-sucedida, lança um erro com o status
      throw new Error('Falha na resposta da rede: ' + response.statusText);
    }
    return response.json(); // Converter a resposta para JSON
  })
  .then(data => {
    // Acessando o elemento 'gallery' no DOM
    const gallery = document.getElementById('gallery');
    // Iterar sobre cada item do array de dados
    data.forEach(cat => {
      // Criar um elemento de imagem
      const imgElement = document.createElement('img');
      imgElement.src = cat.url; // Definir a URL da imagem
      imgElement.alt = "Imagem de Gato"; // Definir o texto alternativo da imagem
      imgElement.style.width = '200px'; // Definir a largura da imagem
      gallery.appendChild(imgElement); // Adicionar a imagem ao elemento 'gallery'
    });
  })
  .catch(error => {
    // Tratar erros que ocorreram durante a fetch ou processamento de dados
    console.error('Erro ao carregar as imagens:', error);
    const gallery = document.getElementById('gallery');
    gallery.textContent = 'Erro ao carregar imagens: ' + error.message; // Mostrar erro no elemento 'gallery'
  });
