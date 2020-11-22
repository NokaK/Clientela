const dropDown = document.getElementById('dropdown');
const dropDownContent = document.getElementById('dropdown-content')
dropDown.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropDownContent.style.display === "none") {
        dropDownContent.style.display = "block";
      } else {
        dropDownContent.style.display = "none";
      }
})


// services  block starting
const service = document.querySelectorAll('.service');
const disableService = document.getElementById('disable');
const addContent = '<div class="d-flex justify-content-between" ><button class="service-item chosen-service-item d-flex align-items-center" value="In-store"><img class="service-img" src="assets/img/shop.svg" alt="shop"><span class="service-title">In-store</span></button><button class="service-item chosen-service-item d-flex align-items-center" value="video"><img class="service-img" src="assets/img/video.svg" alt="video"><span class="service-title">Video</span></button></div>'
const confirmBtn = document.getElementById('confirm');

confirmBtn.disabled = true;

const clearService = () => {
  service.forEach(item => {
    item.firstElementChild.classList.remove("chosen-service");
    item.lastElementChild.innerHTML = '';
  })
}

service.forEach(elem => {
  elem.addEventListener('click',(e) =>{ 

    clearService();

    elem.firstElementChild.classList.add("chosen-service");
    elem.lastElementChild.innerHTML = addContent;

    disableService.disabled = true;
   
    const serviceValue = elem.value;
    const selectedService = localStorage.setItem('service', serviceValue);

  
    const clearServiceItem = () => {
      serviceContent.forEach(serviceItem => {
        serviceItem.classList.remove("chosen-service");
      })
    }

    const serviceContent = document.querySelectorAll('.service-item');

    serviceContent.forEach(serviceElem => {
      serviceElem.addEventListener('click',(e) =>{ 

        clearServiceItem();

        serviceElem.classList.add("chosen-service");
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = 1;

        const channelValue = serviceElem.value;
        const selectedChannel = localStorage.setItem('channel', channelValue);


        //starting  form submit

        const formSubmit = document.getElementById('form-submit');
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');;

        localStorage.getItem(serviceValue);
        localStorage.getItem(channelValue);
        
        formSubmit.addEventListener('submit', (e) => {
          e.preventDefault()
         
          popup.style.display = 'block';
        
          if(serviceValue == 'Skin care services' && channelValue == 'video') {
            popupContent.textContent = "Congratulations, you've successfully submitted Video Skin care services request";
          }else {
            popupContent.textContent = "Congratulations, you've successfully submitted " + channelValue + " " + serviceValue + " request";
          }

          const hidePopUp = setInterval( () => {
              popup.style.display = 'none';
              return false;
          }, 5000);
        })
      })
    })
  })
})

// services  block ending

const chosenLocation = document.querySelectorAll('.child-wrapper');                          
const  locationContent = '<div class="chosen-location-info"><h5>Adress</h5><p> 640 5th Ave, New York, NY 10019, USA</p></div><div class="chosen-location-info"><h5 >Opening hours</h5><p>Monday - Saturday: 09:30 - 21:00Sunday: 11:00 - 18:30</p></div><div class="location-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4366088603824!2d-73.96780638463315!3d40.77441457932519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29d3847f5%3A0x564dfbba0141774a!2s5th%20Ave%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1606046821939!5m2!1sen!2sge" width="300" height="175" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>'

const clearLocation = () => {
  chosenLocation.forEach(cleaItem => {
    cleaItem.classList.remove("chosen-location");
    cleaItem.lastElementChild.innerHTML = '';
  })
}
chosenLocation.forEach(locationItem => {
  locationItem.addEventListener('click',(e) => { 

    clearLocation();

    locationItem.classList.add("chosen-location");
    locationItem.lastElementChild.innerHTML = locationContent;

  })
})

//location  block starting

