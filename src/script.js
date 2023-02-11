$(document).ready(function(){
    $(' .navbar__menu-btn').on('click', function(){
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-close');
    });

    const slickOptions ={
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">PREV</button>',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">next</button>',
    };
    $(".slider").slick(slickOptions);

    $(".form-submit").on("click", () => {
        const email = $("#email").val();
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",//ideal por pelo backend
            Password : "password",//ideal por pelo backend
            To : 'them@website.com',
            From : email,
            Subject : "Pleas add to newsletter",
            Body : `Add to newsletter and ${email}`,
        }).then(
          message => alert(message)
        );
    });
});