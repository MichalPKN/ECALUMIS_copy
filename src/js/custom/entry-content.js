// tablesWrap();
// iframesWrap();

// // TABLE (wysiwyg editor) responsive
// function tablesWrap() {
// 	var contentTables = document.querySelectorAll(".entry-content table"),
//       i;

// 	for (i = 0; i < contentTables.length; ++i) {
// 		contentTables[i].classList.add("table");

//     var contentTableWrap = document.createElement("div");

//     contentTableWrap.classList.add("u-table-responsive");

// 		contentTables[i].parentNode.insertBefore(contentTableWrap, contentTables[i]);

// 		contentTableWrap.appendChild(contentTables[i]);
// 	}
// }

// // IFRAME youtube/google (wysiwyg editor) responsive
// function iframesWrap() {
// 	var contentIframes = document.querySelectorAll(".entry-content iframe"),
//       i;

// 	for (i = 0; i < contentIframes.length; ++i) {
// 		contentIframes[i].removeAttribute("height");
// 		contentIframes[i].removeAttribute("width");

//     var iframeWrap = document.createElement("div");
//     iframeWrap.classList.add("u-embed-responsive");
// 		iframeWrap.classList.add("u-embed-responsive-16by9");

// 		contentIframes[i].parentNode.insertBefore(iframeWrap, contentIframes[i]);

// 		iframeWrap.appendChild(contentIframes[i]);
// 	}
// }