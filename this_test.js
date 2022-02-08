let obj = {
    a: this,                   
    b() {
        return this;
    },
    c() {
        return (function() {
            return this;
        })();
    },
    d: () => {
        return this;
    }, 
    e() {
        return (() =>  this)();
    }
}

console.log(obj.e());