/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',

		},
		{
			module: 'clock',
			position: 'top_left',
			
		},
		/*{
			module: 'calendar',
			header: '',
			
		},
		*/
		/*
		{
			module: 'compliments',
			position: 'lower_third'
			config: {
			    compliments: {
			        day_sunny: [
			            "Today is a sunny day",
			            "It\'s a beautiful day"
			        ],
			        snow: [
			            "Don\'t forget to shovel your driveway"
			        ],
			        rain: [
			            "Don\'t forget your umbrella!"
			        ]
			    }
			}
		},
		*/
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Hamilton',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '29fc353b88090d5fe8ee537a7455590f'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Toronto',
				locationID: '',  //ID from http://www.openweathermap.org
	            appid: '29fc353b88090d5fe8ee537a7455590f'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					},
					{	
						title: "CBC Canada",
						url: "http://rss.cbc.ca/lineup/canada.xml",
					},
					{
						title: "CBC Sports",
						url: "http://rss.cbc.ca/lineup/sports-nhl.xml",
					},
					{
						title: "NHL.com",
						url: "ice.nhl.com/rss/news.xml",
					},
					{
						title: "/r/worldnews",
						url: "https://www.reddit.com/r/worldnews/.rss",
					},
							
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
    			module: 'MMM-Traffic',
    			position: 'top_left',
    			classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
   			config: {
        			api_key: 'AIzaSyCsibfx-tmjDK5mmktkMJsJerhQu72EO58',
        			mode: 'transit',
			        origin: '165 Haddon Ave S, Hamilton, ON L8S 1X9',
			        destination: 'Hamilton, Ontario',
			        //arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
			        route_name: 'Haddon to Downtown',
			        changeColor: true,
			        showGreen: false,
			        limitYellow: 5, //Greater than 5% of journey time due to traffic
			        limitRed: 20, //Greater than 20% of journey time due to traffic
			        traffic_model: 'best_guess',
      				interval: 120000 //2 minutes
   	 			}
		},
		{
    			module: 'MMM-Traffic',
    			position: 'top_left',
    			classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
   			config: {
        			api_key: 'AIzaSyCsibfx-tmjDK5mmktkMJsJerhQu72EO58',
        			mode: 'transit',
			        origin: '165 Haddon Ave S, Hamilton, ON L8S 1X9',
			        destination: 'University Plaza Platform 1,Hamilton,ON L9H 4H4',
			        //arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
			        route_name: 'Haddon to University Plaza',
			        changeColor: true,
			        showGreen: false,
			        limitYellow: 5, //Greater than 5% of journey time due to traffic
			        limitRed: 20, //Greater than 20% of journey time due to traffic
			        traffic_model: 'best_guess',
      				interval: 120000 //2 minutes
   	 			}
		},
		{
		    module: 'MMM-NHL',
		    position: 'top_left',
		    config: {
			focus_on: [6,8,9,10],
			datesToLookAhead: 2	

		    }
		},
		{
		    module: 'DailyXKCD',
		    position: 'bottom_right',
		    config: {
		        invertColors: true,
		        title: false,
		        altText: true
		  	}
 		 },
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
