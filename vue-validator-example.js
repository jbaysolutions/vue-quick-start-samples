Vue.config.devtools = true;
Vue.config.debug = true;

Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
});


new Vue({
    el: '#validatorContainer',
    validators: {
        passwordValidator: function (val, target) {
            return val === target;
        }
    },
    data: {
        confirmPassword: "", // this only is here to clean when a user is saved
        user: {
            firstName: "",
            lastName: "",
            country: "",
            email: "",
            password: "",
        },
        userList: [],
        showValidatorJson: false
    },
    ready: function () {
    },
    methods: {
        saveUser: function () {
            this.$validate(true);
            if (this.$sampleValidator.valid) {
                this.userList.push(this.user);
                /*this.user =  {
                    firstName: "",
                    lastName: "",
                    country: "",
                    email: "",
                    password: "",
                };
                this.confirmPassword = "";*/
                this.$resetValidation();
            }
        },
        removeUser: function(user) {
            this.userList.$remove(user);
        }
    },
});