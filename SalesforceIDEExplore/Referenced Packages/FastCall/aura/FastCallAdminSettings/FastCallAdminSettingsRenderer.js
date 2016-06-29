({
	render: function(component, helper) {
		
        var el = document.getElementById("fc-settings-container");
        
        $A.util.removeElement(el);
        
        window['FastCallAdminSettings'] = {isLightning:true,lightningCmpId: component.getGlobalId()};
    
        return component.superRender();
    },
    
	afterRender: function(component, helper) {
		component.superAfterRender();
	}
})