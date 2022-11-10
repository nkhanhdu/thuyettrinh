var app = angular.module("myProject", ["ngRoute"]);

        app.config(function($routeProvider)  
        {
            $routeProvider
            .when("/",{
                templateUrl: "home.html"
                // controller: "homeController"
            })
            .when("/products",{
                templateUrl: "products.html"
            })
            .when("/offers",{
                templateUrl: "offers.html",
                controller: "offersController"
            })
            .when("/about",{
                templateUrl: "about.html"
            })
            .when("/contact",{
                templateUrl: "contact.html"
            })
            .when("/wishlist",{
                templateUrl: "wishlist.html"
            })
            .when("/cart",{
                templateUrl: "cart.html"
            })
            .when("/signin",{
                templateUrl: "signin.html",
                controller: "signinController"
            })
            .when("/signup",{
                templateUrl: "signup.html"
            })
        });

        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("nav-bar");
        var sticky = navbar.offsetTop;
        // var filter = document.getElementsById("filter");
        // var filter-sticky = filter.offsetTop;
        // var filter = $('#filter');
        // var distance_from_top = document.body.scrollTop;
        // filter.onclick(function()
        // {
        //     alert("hello Dan");
        // });

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

        app.controller("offersController", function($scope)
        {
            $scope.leftScroll = function()
            {
                document.querySelector('div.product-container').scrollLeft -= 500;
            }
            $scope.rightScroll = function()
            {
                document.querySelector('div.product-container').scrollLeft += 500;
            }
        })
        app.controller("signinController", function($scope,$http)
        {
            $scope.btn = function () {
                var em = $scope.email;
                var pas = $scope.pass;
                var detail ={
                  "email" : em,
                  "password" : pas
                  }
                  console.log(em + " and1 " + pas);
                }
            $http.get('user.json').then(function(response){
                $scope.list = response.data.userList;
                })
            
        })