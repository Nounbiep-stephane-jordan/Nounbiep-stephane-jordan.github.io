self.addEventListener("install",(event)=>{
	console.log("[service worker] installing service worker ...",event)
});  //no dom acess in service worker




self.addEventListener('activate',(event)=>{
	console.log("[service worker] activating service worker ...",event)
    return self.clients.claim();
});


self.addEventListener("fetch",(event)=>{
	console.log("[service worker] fetching something...",event)
 
});
