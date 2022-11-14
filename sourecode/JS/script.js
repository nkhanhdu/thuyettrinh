var app = angular.module("myProject", ["ngRoute"]);

        app.config(function($routeProvider)  
        {
            $routeProvider
            .when("/",{
                templateUrl: "home.html"
                // controller: "homeController"
            })
            .when("/products",{
                templateUrl: "products.html",
                controller: "productController"
            }) .when("/productdetail",{
                templateUrl: "productdetail.html",
                controller: "detailController"
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
            .when("/checkout",{
                templateUrl: "checkout.html",
                controller: "checkoutController"
            })
            .when("/signin",{
                templateUrl: "signin.html",
                controller: "signinController"
            })
            .when("/signup",{
                templateUrl: "signup.html",
                controller: "signupController"
            })
            .when("/dissclaimer",{
                templateUrl: "dissclaimer.html"
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

        app.run(function($rootScope, $http)
        {
            // $rootScope.confirmUser;
            $http.get("./JSON/user.json").then(function(response)
            {
                $rootScope.list = response.data.userList;
                
            })
        });
        app.run(function($rootScope, $http)
        {
            // $rootScope.confirmAlert;
            $http.get("./JSON/product.json").then(function(response)
            {
                $rootScope.plist = response.data.productList;
              
               
                
            })
        });

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

        app.controller("signinController", function($scope, $location, $rootScope)
        {
            $scope.btn2 = function(path)
            {
                for (var i = 0; i<$scope.list.length; i++)
                {
                    if (($scope.email == $scope.list[i].email) && ($scope.pass == $scope.list[i].pass))
                    {
                        $location.path("/");
                        return;
                    }
                    else if (i == ($scope.list.length-1))
                    {
                        alert("Wrong account");
                        return;
                    }
                }
                
            }
        })
        app.controller("checkoutController", function($scope, $rootScope, $location)
        {
            $scope.hideAndShow = false;
            $scope.showCredit = false;
            $scope.showNewAlert = false;
            $scope.confirmFinish = function(path)
            {
                $rootScope.confirmAlert = true;
                $location.path("/");
                $("html, body").animate({ scrollTop: 0 }, 200);
                return;
            }
        })
        app.controller("detailController",function($scope,$http)
        {
           
        })
        app.controller("productController", function($rootScope,$scope)
        {
            $scope.clickProduct=function(event){
                $rootScope.selectProduct=event
            }

        })
        app.controller("signupController", function($scope,$location)
        {
            $scope.btn3 = function(path){
                //tao 1 doi tuong JSON, noi dung gia tri cac o input o form
                var newuser = {"name": $scope.name,
                 "email": $scope.email,
                  "pass": $scope.pass,
                "telephone": $scope.telephone,
                "address": $scope.address};

                //them vao danh sach bang phuong thuc push()
                $scope.list.push(newuser);
                alert("Add new user successfully");
                $location.path("/signin");
            }
        })
        