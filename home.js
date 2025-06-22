const logout=document.getElementById("logout");

logout.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="./index.html"
})