<!-- 作品過濾JS -->
  function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      filters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      const category = this.dataset.category;
      filterCards(category);
    });
  });