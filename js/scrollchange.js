window.onscroll = () => {
    const nav = document.querySelector('#masthead');
    if (this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};