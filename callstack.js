function a() {
    b();
}

function b() {
    c();
}

function c(){
    console.log("Función c");
}

function x() {
    y();
}

function y() {
    z();
}

function z() {
    console.log("Función z");
}

setTimeout(x,0);
a();