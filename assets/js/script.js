function changeContent(contentId) {
    var contents = document.getElementsByClassName("product-boxs");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    var content = document.getElementById(contentId);
    if (content) {
        content.classList.add("active");
    }
}

// function changeActiveLink(){
//     const links=document.getElementsByClassName("nav-link");

//     links.array.forEach(element => {
//         element.addEventListener('click',()=>{
//             element.classList.add("active");

//         })
//     });
// }