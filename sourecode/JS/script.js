var app = angular.module("myProject", ["ngRoute"]);

        app.config(function($routeProvider)  
        {
            $routeProvider
            .when("/",{
                templateUrl: "../sourcecode/home.html"
                // controller: "homeController"
            })
            .when("/products",{
                templateUrl: "../sourcecode/products.html",
                controller: "productController"
            })
            .when("/productdetail",{
                templateUrl: "./sourcecode/productdetail.html",
                controller: "detailController"
            })

            .when("/offers",{
                templateUrl: "./sourcecode/offers.html",
                controller: "offersController"
            })
            .when("/about",{
                templateUrl: "./sourcecode/about.html"
            })
            .when("/contact",{
                templateUrl: "./sourcecode/contact.html"
            })
            .when("/wishlist",{
                templateUrl: "./sourcecode/wishlist.html",
                controller:"wishlistController"
            })
            .when("/cart",{
                templateUrl: "./sourcecode/cart.html",
                controller: "cartController"
            
            })
            .when("/checkout",{
                templateUrl: "./sourcecode/checkout.html",
                controller: "checkoutController"
            })
            .when("/signin",{
                templateUrl: "./sourcecode/signin.html",
                controller: "signinController"
            })
            .when("/signup",{
                templateUrl: "./sourcecode/signup.html",
                controller: "signupController"
            })
            .when("/dissclaimer",{
                templateUrl: "./sourcecode/dissclaimer.html"
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
            $rootScope.confirmAlert;
            $http.get("./JSON/user.json").then(function(response)
            {
                $rootScope.list = response.data.userList;
            })
            $http.get("./JSON/offers.json").then(function(rsp)
            {
                $rootScope.offers = rsp.data.offersList;
            })
            $http.get("./JSON/product.json").then(function(response)
            {
                $rootScope.plist = response.data.productList;   
            })
        });
        
        app.filter("phoneFilter", function()
        {
            return function(x)
            {
                var tel = x.slice(0,4) + ' ' + x.slice(4,7) + ' ' + x.slice(7,10);
                return tel;
            }
        })

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
            $scope.allowUpdate = true;
            $scope.hideAndShow = false;
            $scope.showCredit = false;
            $scope.showNewAlert = false;
            $scope.showAddress2 = false;
            $scope.confirmAbled = false;
            $scope.cardShow;

            $scope.confirmFinish = function(path)
            {
                if ($scope.shipping == undefined)
                {
                    $("html, body").animate({ scrollTop: 0 }, 200);
                    $scope.shippingAlert = true;
                    return false;
                }
                else if ($scope.payment == undefined)
                {
                    $("html, body").animate({ scrollTop: 0 }, 200);
                    $scope.shippingAlert = false;
                    $scope.paymentAlert = true;
                    return false;
                }
                else if ($scope.cardShow == true)
                {
                    $scope.shippingAlert = false;
                    $scope.paymentAlert = false;
                    $("html, body").animate({ scrollTop: 0 }, 200);
                    return false;
                }
                else if ($scope.confirmAbled  == false)
                {
                    $scope.shippingAlert = false;
                    $scope.paymentAlert = false;
                    $scope.disclaimerAlert = true;
                    return false;
                }
                $rootScope.confirmAlert = true;
                $location.path("/");
                $("html, body").animate({ scrollTop: 0 }, 200);
                return;
            }
        })

        

        app.controller("detailController",function($scope,$http)
        {
            
            $scope.myShow=true;
            $scope.myreview=true;

            $scope.btn5=function(){
                $scope.myShow= !$scope.myShow;
            }
            $scope.btn7=function(){
                $scope.myreview= !$scope.myreview;
            }
        })
        app.controller("productController", function($rootScope,$scope)
        {
            $scope.clickProduct=function(event){
                $rootScope.selectProduct=event
            }
            $("input[type=checkbox]").click(function () {
                let cats = $(".chk-cake:checked").map(function () { return $(this).val() }).toArray().toString();
                
                let subdata = (cats.length==0)?data: data.filter(item => cats.search(item.cat) >= 0);
                
                displayImages(subdata);
            
            });

        })

        app.controller("cartController", function($rootScope,$scope)
        {
            // $scope.addcart=function(event){
            //     $rootScope.selectedProduct=event
            // }
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
        app.controller("wishlistController", function($scope,$rootScope)
        {

        })
        
        // Close the dropdown menu if the user clicks outside of it
        //lap trinh su kien click chon loai san pham
// $("input[type=checkbox]").click(function () {

//     // var cats =
//     //     $('input:checkbox[name="cat"]:checked')
//     //         .map(function () {
//     //             return $(this).val();
//     //         }).get();

//     // cats = cats.toString().trim();
//     //alert("checkbox");

//     let cats = $(".chk-cake:checked").map(function () { return $(this).val() }).toArray().toString();
    
//     let subdata = (cats.length==0)?data: data.filter(item => cats.search(item.cat) >= 0);
    
//     displayImages(subdata);

// });

        
