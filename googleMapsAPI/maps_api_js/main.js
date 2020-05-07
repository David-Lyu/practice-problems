// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'),{
//     center: {
//       lat: -34.397, lng: 150.644},
//     zoom: 8
//   })
// }

// var modal = document.getElementsByClassName("modal");
// var innerModal = document.getElementsByClassName("inner-modal")
// var button = document.querySelector("button")
// modal[0].addEventListener("click", handleModalClick)
// innerModal[0].addEventListener("click",handleInnerModalClick)
// button.addEventListener("click", ()=> modal[0].classList.remove("hidden"))

// function handleModalClick(e) {
//   console.log(e.currentTarget)
//   e.currentTarget.classList.add("hidden")
// }

// function handleInnerModalClick(e) {
//   e.stopPropagation();
//   console.log(e.currentTarget)
//   e.currentTarget.children[0].removeAttribute("readonly")
// }
// var params = {

// }
// this fetch request gets lat/long of address( every space or , is replaced with +)
// var place = "Munich+Germany"
// fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyAyvuSt5fOGYijGD5-oh1HqjZZrfAxxea0`)
//   .then(response=> response.json())
//   .then(data=> {
//     console.log(data.results[0])
//   })
//   .catch(err=> console.error(err))
