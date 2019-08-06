document.addEventListener("DOMContentLoaded", function(event) {
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            console.log('style changed!');
        });
    });

    let target = document.querySelector('body');
    observer.observe(target, { attributes : true, attributeFilter : ['style'] });
});