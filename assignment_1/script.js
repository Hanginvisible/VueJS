function opentNavBar() {
    //  if(document.getElementById("sidebar-nav").style.display="block"){
    //      document.getElementById("sidebar-nav").style.display="none";
    //  }
    //  else if(document.getElementById("sidebar-nav").style.display="none"){
    //     document.getElementById("sidebar-nav").style.display="block";
    //  }

    if (document.getElementById("sidebar-nav").classList.contains('show') == true) {
        document.getElementById("sidebar-nav").classList.remove('show');
    } else {
        document.getElementById("sidebar-nav").classList.add('show');
    }
}