function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top-40) - Math.abs(b.getBoundingClientRect().top-40);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	console.log(titles);
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})