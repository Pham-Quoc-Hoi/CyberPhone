function ProductService() {
    // this.arr = [];
    this.getListProductApi = function () {
        /**
         * Promise
         * - Pending (Tgian chờ)
         * - Resolve (Thành công)
         * - Reject (Thất bại)
         */

        // Pending(Tgian chờ)
        var promise = axios({
            url: "https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Product",
            method: "GET",
        });

        // promise.then(thành công).catch(thất bại)
        return promise;
        // .then(function (res) {
        //     // Resolve(Thành công)
        //     console.log(res.data);
        //     // this.arr = [res.data];
        // })
        // .catch(function (error) {
        //     // Reject(Thất bại)
        //     console.log(error);
        // });
    };
}