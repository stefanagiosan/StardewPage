
const ulFooterShown = document.getElementById('footer_1')
const ulFooterHidden = document.getElementById('footer_2')
const buttonShowMore = document.getElementById('buttonShowMore')


function showMore() {
    ulFooterShown.style.display = 'none';
    ulFooterHidden.className = 'contact-info';
    ulFooterHidden.style.display = 'block';
    buttonShowMore.remove();
};

buttonShowMore.addEventListener("click", showMore);