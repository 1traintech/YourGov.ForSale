function dataBuild() {
	nodes = {
        "Donald Trump": {
            "name": "Donald Trump",
            "USA": true,
            "index": 1,
            "x": width * 0.1,
            "y": height * 0.5,
            "image": "http://placekitten.com/g/48/48",
            "description": "dick president"
        },
        "Vladimir Putin": {
            "name": "Vladimir Putin",
            "USA": false,
            "index": 2,
	        "x": width * 0.9,
	        "y": height * 0.5,
            "image": "http://static2.businessinsider.com/image/5232093ceab8ea8a68966704/meet-the-pr-firm-that-helped-vladimir-putin-troll-the-entire-country.jpg",
            "description": "dick prime minister"
        },
        "Ivanka Trump": {
            "name": "Ivanka Trump",
            "USA": true,
            "index": 3,
            "x": 300,
            "y": 300,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivankatrump.jpg/170px-Ivankatrump.jpg",
            "description": "dick president's daughter"
        },
        "Rex Tillerson": {
            "name": "Rex Tillerson",
            "USA": true,
            "index": 4,
            "x": 550,
            "y": 300,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivankatrump.jpg/170px-Ivankatrump.jpg",
            "description": "dick president's SecState"
        }
    }

	links = [
		{
	        "source": nodes["Donald Trump"],
	        "target": nodes["Vladimir Putin"],
	        "type": LINK_TYPE.Political,
	        "confirmed": true,
		    "description":"blah blah blahh. blah blah blahh. blah blah blahh.",
		    "news_source":""
	    },
	    {
	        "source": nodes["Donald Trump"],
	        "target": nodes["Ivanka Trump"],
	        "type": LINK_TYPE.Business,
	        "confirmed": false,
		    "description":"norf norf norff. norf norf norff. norf norf norff.",
		    "news_source":""
	    },
	    {
	        "source": nodes["Ivanka Trump"],
	        "target": nodes["Rex Tillerson"],
	        "type": LINK_TYPE.Business,
	        "confirmed": false,
		    "description":"blerg blerg blergg. blerg blerg blergg. blerg blerg blergg.",
		    "news_source":""
	    }
    ]

}