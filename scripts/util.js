(function($) {

    function util(){
        var self = this;

        var globalConfig = {
            showLogs: true
        }
        
        self.log = function(msg){
            if(globalConfig.showLogs){
                console.log(msg);
            }
        }
    }

    window.util = new util();
})(jQuery);