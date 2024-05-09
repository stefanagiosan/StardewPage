$("#search").keyup(function () {
    var value = this.value.toLowerCase().trim();

    $("table tr").each(function (index) {
        if (!index) return;
        $(this).find("td").each(function () {
            var id = $(this).text().toLowerCase().trim();
            var not_found = (id.indexOf(value) == -1);
            $(this).closest('tr').toggle(!not_found);
            return not_found;
        });
    });
});

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
