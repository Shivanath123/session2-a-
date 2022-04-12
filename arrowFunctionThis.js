var foot = {
    kick : function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
        }.bind(this)); 
        /**
         * with the bind method, an object can borrow a method from another object. 
         */
    }
};
foot.kick();