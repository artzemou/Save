export default function addTrackTags(){
  var element = document.createElement("script");
				//element.type = 'text/javascript';
				element.src = process.env.PUBLIC_URL + "/js/smarttag.js";
				document.body.appendChild(element);



				element = document.createElement("script");
				element.type = 'text/javascript';
				element.src = process.env.PUBLIC_URL + "/js/xtclicks.js";
				document.body.appendChild(element);

				element = document.createElement("script");
				element.type = 'text/javascript';
				element.src = process.env.PUBLIC_URL + "/js/xtcore.js";
				document.body.appendChild(element);

         var _zbo, location;

				_zbo = _zbo || {register: function(ev,d){ this[ev] = this[ev] || []; this[ev].push(d); }};
					(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
					 g.async = true; g.src= '//dpm.zebestof.com/1961/tag.js';
					 s.parentNode.insertBefore(g,s);}(document,'script'));

           location = window.location.pathname.replace('/','')
           if (location === '') location = 'home'
					_zbo.register(location);

			    console.log(location)

					/*var ATTag = new ATInternet.Tracker.Tag({
						 log: "logc187",logSSL: "logs1187",secure: false,site: 582477,domain: "xiti.com"
					 });
					ATTag.page.send({
						 name: "pagename"
					 });*/

}
