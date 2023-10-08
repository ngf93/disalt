/*************** 
CUSTOM SELECT
****************/
let arrRanges = Array.from(document.querySelectorAll('.range'));
arrRanges.forEach(item => {
    const min = item.dataset.min;
    const max = item.dataset.max;

    const inputMin = item.querySelector(".inputMin");
    const inputMax = item.querySelector(".inputMax");
    const rangeMin = item.querySelector(".rangeMin");
    const rangeMax = item.querySelector(".rangeMax");
    const diapason = item.querySelector(".range-slider-diapason");

    inputMin.value = min;
    rangeMin.value = min;
    inputMax.value = max;
    rangeMax.value = max;

    inputMin.addEventListener('input', (e) => {
        rangeMin.value = e.target.value;
        setDiapason(rangeMin.value, inputMax.value);
    });
    rangeMin.addEventListener('input', (e) => {
        inputMin.value = e.target.value;
        setDiapason(inputMin.value, inputMax.value);
    });
    inputMax.addEventListener('input', (e) => {
        rangeMax.value = e.target.value;
        setDiapason(inputMin.value, rangeMax.value);
    });
    rangeMax.addEventListener('input', (e) => {
        inputMax.value = e.target.value;
        setDiapason(inputMin.value, inputMax.value);
    });

    const setDiapason = function(diapasonMin, diapasonMax) {
        const diapasonVal = Number(max) - Number(min);

        let left = (Number(diapasonMin) - Number(min)) / diapasonVal * 100;
        diapason.style.left=left+"%";

        let width = (Number(diapasonMax) - Number(diapasonMin)) / diapasonVal * 100;
        diapason.style.width=width+"%";
    }
});