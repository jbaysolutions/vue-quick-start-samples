Vue.config.devtools = true;
Vue.config.debug = true;


new Vue({
    el: '#resourceGetContainer',
    data: {
        repoList: [],
        organization: "jbaysolutions",
        status: null,
        statusText: null,
        loading: false,
    },
    ready: function () {
        this.loadRepositories();
    },
    methods: {
        loadRepositories: function () {
            var self = this;
            var url = "https://api.github.com/orgs/" + this.organization + "/repos";

            this.loading = true;
            // GET request
            this.$http.get(url).then(function (response) {
                this.loading = false;
                // success callback
                this.repoList = response.data;

                // get status
                this.status = response.status;
                // get status text
                this.statusText = response.statusText;

            }, function (response) {
                this.loading = false;
                // error callback
                this.repoList = [];

                // get status
                this.status = response.status;

                // get status text
                this.statusText = response.statusText;
            });
        },
    },
});


new Vue({
    el: '#resourcePostContainer',
    data: {
        post: {
            title: "",
            body: "",
            userId: 1,
            id: null,
        },
        status: null,
        statusText: null,
        loading: false,
    },
    ready: function () {
    },
    watch: {
        "post.title": function() {
            this.status = null;
            this.statusText = null;
        },
        "post.body": function() {
            this.status = null;
            this.statusText = null;
        }
    },
    methods: {
        createPost: function () {
            var self = this;
            var url = "http://jsonplaceholder.typicode.com/posts";

            this.loading = true;
            // POST request
            this.$http.post(url, this.post).then(function (response) {
                this.loading = false;
                // success callback
                this.$data.post = response.data;

                // get status
                this.status = response.status;
                // get status text
                this.statusText = response.statusText;

            }, function (response) {
                this.loading = false;
                // error callback
                this.post.id = null;

                // get status
                this.status = response.status;

                // get status text
                this.statusText = response.statusText;
            });
        },
    },
});



