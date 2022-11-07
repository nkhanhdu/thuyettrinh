var app = angular.module("myProject", ["ngRoute"]);

        app.config(function($routeProvider)  
        {
            $routeProvider
            .when("/",{
                templateUrl:"home.html"
                // controller: "homeController"
            })
            .when("/products",{
                templateUrl:"products.html"
            })
            .when("/offers",{
                templateUrl:"offers.html"
            })
            .when("/about",{
                templateUrl:"about.html"
            })
            .when("/contact",{
                templateUrl:"contact.html"
            })
            .when("/wishlist",{
                templateUrl:"wishlist.html"
            })
            .when("/cart",{
                templateUrl:"cart.html"
            })
            .when("/signin",{
                templateUrl:"signin.html"
            })
        });

        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("nav-bar");
        var sticky = navbar.offsetTop;

        function myFunction() 
        {
            if (window.pageYOffset >= sticky) 
            {
                navbar.classList.add("sticky")
            } 
            else 
            {
                navbar.classList.remove("sticky");
            }
        }