function emitUpdate(){var event=document.createEvent('Event');event.initEvent('sw.update',true,true);window.dispatchEvent(event)}if('serviceWorker'in navigator){navigator.serviceWorker.register('/service-worker.js?v=20190221135443').then(function(reg){if(reg.waiting){emitUpdate();return}reg.onupdatefound=function(){var installingWorker=reg.installing;installingWorker.onstatechange=function(){switch(installingWorker.state){case'installed':if(navigator.serviceWorker.controller){emitUpdate()}break;}}}}).catch(function(e){console.error('Error during service worker registration:',e)})}