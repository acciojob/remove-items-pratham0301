
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const select = document.getElementById('colorSelect');
    // Remove the selected option if an option is selected
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
});