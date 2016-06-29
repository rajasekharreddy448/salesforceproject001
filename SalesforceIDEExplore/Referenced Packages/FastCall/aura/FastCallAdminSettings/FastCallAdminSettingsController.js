({
    initializeNgView : function(component, event, helper) {

        setTimeout(function () {

            var fc_root_element = $('#fc-settings-container');

            angular.bootstrap(fc_root_element,['fastCallAdminSettings']);

            setTimeout(function () {

                var fc_injector = fc_root_element.injector();
                var $state = fc_injector.get('$state');
                var $rootScope = fc_injector.get('$rootScope');

                // Get current user profile 
                fc_injector.get('fastCallProfileService').getCurrentProfileInfo()
                .then(function (profile) {
                  
                
                    
                    //$rootScope.rootLoaded = true;
                    
                    // Remove preloader
                    $('#fc-settings-container .fc-app-preloader').hide(250,function () {
                        $('#fc-settings-container .fc-app-preloader').remove();
                    });

                    // Navigate to home
                    $state.go('home',{},{location:false});

                }, function (error) {

                });

            },500);

        }, 500);  

    }
})