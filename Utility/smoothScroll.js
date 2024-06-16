const smoothScroll = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1)
    if(document.getElementById(id)){
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
}

export default smoothScroll;