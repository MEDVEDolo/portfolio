const defaultSelect = () => {
    const element = document.querySelector('.custom-select');
    const choices = new Choices(element, {
        searchEnabled: false,
        renderSelectedChoices: 'always',
    });
}

defaultSelect();