/**
	 * in template literals we use ``.
	 * ${} is placeholder that used in template literals
	 * the experssion used inside ${} is executed at run time, and its output is passed as a string to template literals.
	 */
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function html(pieces,...substitutions) {
    var result = pieces[0];
	    for (var i = 0; i < substitutions.length; ++i) {
	        result += escape(substitutions[i]) + pieces[i + 1];
	    }
	return result;
}
    function escape(s) {
	    return s.replace(/&/g, "&amp;")
	            .replace(/</g, "&lt;")
	            .replace(/>/g, "&gt;")
	            .replace(/'/g, "&apos;")
	            .replace(/"/g, "&quot;");
    }
	