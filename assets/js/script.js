// $(".project-card").hover(
//     function () {
//         $(this).removeClass("blur").css("cursor", "pointer");
//     },
//     function () {
//         $(this).addClass("blur");
//     }
// );
// $(".bio").hover(
//     function () {
//         $(this).removeClass("blur").css("cursor", "pointer");
//     },
//     function () {
//         $(this).addClass("blur");
//     }
// );

$('.project-card').on('click', function() {
    openProject();
})


