window.onload = () => {

  const dropDown = document.getElementById('dropdown');
  const dropDownContent = document.getElementById('dropdown-content')
  dropDown.addEventListener('click', (e) => {
      e.preventDefault();
      if (dropDownContent.style.display === "block" || dropDownContent.style.display === false) {
          dropDownContent.style.display = "none";
        } else {
          dropDownContent.style.display = "block";
        }
  })

  // services  block starting
  const service = document.querySelectorAll('.service');
  const disableService = document.getElementById('disable');
  //const addContent = '<div class="d-flex justify-content-between"><button class="service-item chosen-service-item d-flex align-items-center" value="In-store"><img class="service-img" src="assets/img/shop.svg" alt="shop"><span class="service-title">In-store</span></button><button class="service-item chosen-service-item d-flex align-items-center" value="video"><img class="service-img" src="assets/img/video.svg" alt="video"><span class="service-title">Video</span></button></div>'
  const confirmBtn = document.getElementById('confirm');

  confirmBtn.disabled = true;

  const clearService = () => {
    service.forEach(item => {
      item.firstElementChild.classList.remove("chosen-service");
      document.querySelectorAll('.fill').forEach( (fillColor) => {
        fillColor.style.fill = '#000';
      })
      item.lastElementChild.innerHTML = '';
    })
  }

  service.forEach(elem => {
    elem.addEventListener('click',(e) =>{ 
      
      // starting create channel  content

      const addInStorageSpan = document.createElement('span');
      addInStorageSpan.classList.add('service-title');
      addInStorageSpan.textContent = 'In-store';

      const addStoreButton = document.createElement('button');
      addStoreButton.classList.add('chosen-service-item');
      addStoreButton.setAttribute('value','In-store');
  
      const addInStoreImg = '<?xml version="1.0" encoding="UTF-8"?><svg class="service-img" width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>6F5E3F8C-A7F1-4BD7-9AEB-BE0CDC6AC88F</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="shop-(1)" class="fill" fill-rule="nonzero"><g id="Shape"><path d="M28.9472028,6.92273376 L26.8757915,0.70845239 C26.7348776,0.28528653 26.3388984,0 25.8929135,0 L3.10714719,0 C2.66116233,0 2.26518313,0.28528653 2.12426915,0.70845239 L0.0527972277,6.92273376 C0.0208761452,7.01946779 0.00303432343,7.1202678 0,7.2220388 C0,7.23241616 0,7.23963784 0,7.2500152 L0,8.28574899 C0.00376256105,9.90850176 0.771142956,11.4348846 2.07141123,12.4058054 C2.07141123,12.4141194 2.07141123,12.4203094 2.07141123,12.4285628 L2.07141123,25.8928593 C2.07141123,27.608887 3.46252715,29 5.17855842,29 L23.8214416,29 C25.5374728,29 26.9285888,27.608887 26.9285888,25.8928593 L26.9285888,12.4285628 C26.9285888,12.4202488 26.9285888,12.4140587 26.9285888,12.4058054 C28.228857,11.4348846 28.9962981,9.90850176 29,8.28574899 L29,7.2500152 C29,7.23963784 29,7.23241616 29,7.2220388 C28.9969657,7.12020712 28.9791845,7.0194071 28.9472028,6.92273376 Z M21.7500303,2.07140693 L25.1461665,2.07140693 L26.5278153,6.21428141 L21.7500303,6.21428141 L21.7500303,2.07140693 Z M15.535736,2.07140693 L19.6786191,2.07140693 L19.6786191,6.21428141 L15.535736,6.21428141 L15.535736,2.07140693 Z M9.32144158,2.07140693 L13.4643247,2.07140693 L13.4643247,6.21428141 L9.32144158,6.21428141 L9.32144158,2.07140693 Z M3.85389419,2.07140693 L7.25003034,2.07140693 L7.25003034,6.21428141 L2.47224536,6.21428141 L3.85389419,2.07140693 Z M16.5714719,26.9285324 L12.4285888,26.9285324 L12.4285888,18.6428442 L16.5714719,18.6428442 L16.5714719,26.9285324 Z M24.8571775,25.8928593 C24.8571775,26.4648888 24.3934722,26.9285931 23.8214416,26.9285931 L18.6428832,26.9285931 L18.6428832,17.607171 C18.6428832,17.0351416 18.1791778,16.5714373 17.6071472,16.5714373 L11.3928528,16.5714373 C10.8208222,16.5714373 10.3571168,17.0351416 10.3571168,17.607171 L10.3571168,26.9285931 L5.17855842,26.9285931 C4.60652777,26.9285931 4.14282246,26.4648888 4.14282246,25.8928593 L4.14282246,13.360705 C5.59632407,13.6590997 7.10778126,13.3122166 8.28570562,12.4099321 C10.1345796,13.7678497 12.651126,13.7678497 14.5,12.4099321 C16.348874,13.7678497 18.8654204,13.7678497 20.7142944,12.4099321 C21.8922187,13.3122773 23.4036759,13.6590997 24.8571775,13.360705 L24.8571775,25.8928593 L24.8571775,25.8928593 Z M23.8214416,11.392829 C22.92577,11.3922828 22.0752491,10.9993994 21.4941762,10.3177705 C21.1177987,9.88707948 20.4634772,9.8430212 20.0327853,10.2193979 C19.9978299,10.2499231 19.9649379,10.2828151 19.9344126,10.3177705 C18.7827655,11.6031072 16.8072995,11.7114323 15.5219601,10.5598483 C15.4369384,10.4836262 15.356104,10.4028527 15.2798818,10.3177705 C14.8745569,9.88707948 14.1968104,9.86644613 13.7660578,10.2718309 C13.7502794,10.286699 13.7349257,10.301992 13.7201182,10.3177705 C12.5685318,11.6031072 10.5930052,11.7114323 9.30766575,10.5598483 C9.22258332,10.4836262 9.14180963,10.4028527 9.06558742,10.3177705 C8.6602625,9.88707948 7.98245533,9.86644613 7.55176347,10.2718309 C7.53598498,10.286699 7.52063131,10.301992 7.50582381,10.3177705 C6.92475087,10.9993994 6.0742907,11.3922828 5.17855842,11.392829 C3.46252715,11.392829 2.07141123,10.001716 2.07141123,8.2856883 L26.9285888,8.2856883 C26.9285888,10.001716 25.5374728,11.392829 23.8214416,11.392829 Z"></path></g></g></g></svg>'
      addStoreButton.innerHTML = addInStoreImg;
      addStoreButton.appendChild(addInStorageSpan)

      const addVideoSpan = document.createElement('span');
      addVideoSpan.classList.add('service-title');
      addVideoSpan.textContent = 'Video';

      const addVideoButton = document.createElement('button');
      addVideoButton.classList.add('chosen-service-item');
      addVideoButton.setAttribute('value','Video');

      const addVideoImg = '<?xml version="1.0" encoding="UTF-8"?><svg class="service-img" width="29px" height="19px" viewBox="0 0 29 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>5F5852D0-0663-4062-BD23-30110934DFBB</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="video" transform="translate(0.000000, -5.000000)" class="fill" fill-rule="nonzero"><g id="video-(2)" transform="translate(0.000000, 5.000000)"><path d="M28.5011151,2.24537657 C28.195887,2.05663389 27.8146402,2.03940377 27.4936381,2.19981381 L20.7084874,5.59287448 L20.7084874,3.12647908 C20.7084874,1.41092887 19.3177615,0.0202029289 17.6022113,0.0202029289 L3.10627615,0.0202029289 C1.39072594,0.0202029289 0,1.41092887 0,3.12647908 L0,15.5515837 C0,17.2671339 1.39072594,18.6578598 3.10627615,18.6578598 L17.6022113,18.6578598 C19.3177615,18.6578598 20.7084874,17.2671339 20.7084874,15.5515837 L20.7084874,13.0851883 L27.4936381,16.4834665 C28.0052029,16.7390669 28.6270649,16.5316381 28.8827259,16.0200732 C28.9554079,15.8746485 28.992841,15.7141172 28.9919472,15.5515837 L28.9919472,3.12647908 C28.9919472,2.76755858 28.8064038,2.43417992 28.5011151,2.24537657 Z M18.6376569,15.5515837 C18.6376569,16.123454 18.1740816,16.5870293 17.6022113,16.5870293 L3.10627615,16.5870293 C2.53440586,16.5870293 2.07083054,16.123454 2.07083054,15.5515837 L2.07083054,3.12647908 C2.07083054,2.55460879 2.53440586,2.09103347 3.10627615,2.09103347 L17.6022113,2.09103347 C18.1740816,2.09103347 18.6376569,2.55460879 18.6376569,3.12647908 L18.6376569,15.5515837 Z M26.9210397,13.876318 L20.7084874,10.7700418 L20.7084874,7.90814226 L26.9210397,4.80186611 L26.9210397,13.876318 L26.9210397,13.876318 Z" id="Shape"></path><path d="M10.3542741,5.19737029 C8.06685356,5.19737029 6.2125523,7.05167155 6.2125523,9.33909205 C6.2125523,11.6265126 8.06685356,13.4808138 10.3542741,13.4808138 C12.6416946,13.4808138 14.4959958,11.6265126 14.4959958,9.33909205 C14.4959958,7.05167155 12.6416339,5.19737029 10.3542741,5.19737029 Z M10.3542741,11.4099226 C9.21059414,11.4099226 8.28344351,10.482772 8.28344351,9.33909205 C8.28344351,8.19541213 9.21059414,7.26826151 10.3542741,7.26826151 C11.497954,7.26826151 12.4251046,8.19541213 12.4251046,9.33909205 C12.4251046,10.482772 11.497954,11.4099226 10.3542741,11.4099226 Z" id="Shape"></path></g></g></g></svg>'
      addVideoButton.innerHTML = addVideoImg;
      addVideoButton.appendChild(addVideoSpan);

    // ending create channel  content


      clearService();
      elem.firstElementChild.classList.add("chosen-service");
      elem.querySelector('.fill').style.fill = '#fff';
      elem.lastElementChild.appendChild(addStoreButton);
      elem.lastElementChild.appendChild(addVideoButton);
      disableService.disabled = true;
    
      const serviceValue = elem.value;
      localStorage.setItem('service', serviceValue);

      const clearServiceItem = () => {
        serviceContent.forEach(serviceItem => {
          serviceItem.classList.remove("chosen-service");
          document.querySelectorAll('.fill').forEach( (fillColor) => {
            fillColor.style.fill = '#000'; //funqciaSI gavitano ro imUSavebs
          })
        })
    
      }

      const serviceContent = document.querySelectorAll('.chosen-service-item');

      serviceContent.forEach(serviceElem => {
        serviceElem.addEventListener('click',(e) =>{ 

          console.log(serviceElem)
          clearServiceItem();

          serviceElem.classList.add("chosen-service");
          console.log(serviceElem)
          //serviceElem.style.background = 'red';
          serviceElem.querySelector('.fill').style.fill = '#fff';
          confirmBtn.disabled = false;
          confirmBtn.style.opacity = 1;


          const channelValue = serviceElem.value;
          localStorage.setItem('channel', channelValue);

          //starting  form submit

          const formSubmit = document.getElementById('form-submit');
          const popup = document.getElementById('popup');
          const popupContent = document.getElementById('popup-content');;
          body = document.getElementsByTagName('body')[0]

          localStorage.getItem(serviceValue);
          localStorage.getItem(channelValue);
          
            
        
          formSubmit.addEventListener('submit', (e) => {
            e.preventDefault()
          
            popup.style.display = 'block';
            body.style.overflow = 'hidden'

            if(serviceValue === 'Skin care services' && channelValue === 'Video') {
              popupContent.textContent = "Congratulations, you've successfully submitted Video Skin care services request";
            }else {
              popupContent.textContent = "Congratulations, you've successfully submitted " + channelValue + " " + serviceValue + " request";
            }

            const hidePopUp = () => {
              popup.style.display = "none";
              body.style.overflow = 'inherit';
            }
            window.onclick = (e) => {
              if (e.target == popup) {
                hidePopUp();
                clearServiceItem();
                clearService();
                clearLocation();
                localStorage.clear();
                confirmBtn.disabled = true;
                confirmBtn.style.opacity = 0.7;
                const radioInput = document.querySelectorAll('input[type=radio]');
                radioInput.forEach ((checkedElem) => {
                  checkedElem.checked =  false;
                })
              }
            }
          })
        })
      })
    })
  })

  // services  block ending



  //location  block starting

  //starting create location block

  const chosenLocation = document.querySelectorAll('.child-wrapper');                          
  //const locationContent = '<div class="chosen-location-info"><h5>Adress</h5><p> 640 5th Ave, New York, NY 10019, USA</p></div><div class="chosen-location-info"><h5 >Opening hours</h5><p>Monday - Saturday: 09:30 - 21:00Sunday: 11:00 - 18:30</p></div><div class="location-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4366088603824!2d-73.96780638463315!3d40.77441457932519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29d3847f5%3A0x564dfbba0141774a!2s5th%20Ave%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1606046821939!5m2!1sen!2sge" width="300" height="175" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>'
  const activeLocation = document.createElement('div');
  activeLocation.classList.add('chosen-location-info');

  const locationTitle = document.createElement('h5');
  locationTitle.textContent = 'Adress';
  activeLocation.appendChild(locationTitle);

  const locationDesc = document.createElement('p');
  locationDesc.textContent = '640 5th Ave, New York, NY 10019, USA';
  activeLocation.appendChild(locationDesc);

  const timeTitle = document.createElement('h5');
  timeTitle.textContent = 'Opening hours';
  activeLocation.appendChild(timeTitle);

  const timeDesc = document.createElement('p');
  timeDesc.textContent = 'Monday - Saturday: 09:30 - 21:00Sunday: 11:00 - 18:30';
  activeLocation.appendChild(timeDesc);

  const map = document.createElement('div');
  map.classList.add('location-map');

  const googleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4366088603824!2d-73.96780638463315!3d40.77441457932519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29d3847f5%3A0x564dfbba0141774a!2s5th%20Ave%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1606046821939!5m2!1sen!2sge" width="300" height="175" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  map.innerHTML = googleMap;

  //ending create location block

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
      locationItem.lastElementChild.appendChild(activeLocation);
      locationItem.lastElementChild.appendChild(map);

    })
  })

  //location  block ending
}
