const output_box = document.querySelector('.output-box')
const input_data = document.querySelector('#memoarea')
const clear_btn = document.querySelector('.clear-button')
const save_btn = document.querySelector('.save-button')

save_btn.addEventListener('click', function() {
    localStorage.setItem('content', input_data.value);
    const memodata = localStorage.getItem('content');
    output_box.textContent = memodata;
})

clear_btn.addEventListener('click',function() {
    input_data.value = '';
    output_box.textContent = '';
    localStorage.clear();
})