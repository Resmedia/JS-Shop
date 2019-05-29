const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    removeAll: '/api/cart/all-remove',
    methodGet: 'GET',
    methodPost: 'POST',
    methodPut: 'PUT',
    methodDelete: 'DELETE',
  },
  methods: {
    async processJson(url, data, method) {

      if (url === this.removeAll && method === this.methodDelete) {
        return fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json()).catch(error => this.$refs.error.setError(error));
      }

      if (method !== this.methodGet) {
        return fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .catch(error => this.$refs.error.setError(error));

      } else {
        return await fetch(url).
          then(result => result.json()).
          catch(error => this.$refs.error.setError(error));
      }
    },
    getJson(url) {
      return this.processJson(url, null, this.methodGet);
    },
    postJson(url, data) {
      return this.processJson(url, data, this.methodPost);
    },
    putJson(url, data) {
      return this.processJson(url, data, this.methodPut);
    },
    removeJson(url, data) {
      return this.processJson(url, data, this.methodDelete);
    },
    clearJson(url) {
      return this.processJson(url, null, this.methodDelete);
    },
  },
});
