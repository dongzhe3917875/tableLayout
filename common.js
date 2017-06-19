var toggles = document.querySelectorAll('.toggle')
for (var i = 0, length = toggles.length; i < length; i++) {
	toggles[i].onclick = (function(j){
		return function(event) {
			var table = event.target.parentNode.querySelector('table')
			table.classList.toggle('table-fixed')
			event.target.nextElementSibling.innerHTML = table.classList.contains('table-fixed') ? 'fixed' : 'auto'
		}
	})(i)
}