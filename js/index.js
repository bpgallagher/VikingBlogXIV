// This will let you use the .remove() function later on
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

mapboxgl.accessToken = "pk.eyJ1IjoiYnBnYWxsYWdoZXIiLCJhIjoiY2psM3lpMjlnMDFhODNrbjVqamE4MWRubCJ9.YbVfZ2KngIrZ4at-ijQtRQ";

// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: "map",
  // style URL
  style: "mapbox://styles/mapbox/light-v9",
  // initial position in [long, lat] format
  center: [12.486912, 41.894865],
  // initial zoom
  zoom: 11.25,
  pitch: 45
});

// Add a geocoder to search for places using Mapbox Geocoding API
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Display driving directions
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field'])        {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
});

var colleges = {
  type: "FeatureCollection",
  features: [{
      id: "address.1389223010",
      type: "Feature",
      place_type: ["address"],
      relevance: 0.75,
      properties: {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        landmark: "true",
        tel: "06 393 842",
        category: "college, education, school, university",
        address: "Via Marcantonio Colonna 21",
        text: "St. John's University",
        place_name: "St. John's University"
      },
      matching_place_name: "via Marcantonio Colonna 21, 00192 Rome Roma, Italy",
      center: [12.466754, 41.910315],
      geometry: {
        type: "Point",
        coordinates: [12.466754, 41.910315]
      },
      address: "21",
      context: [
        {
          id: "postcode.12135619990400930",
          text: "00192"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.13495378506950280",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        landmark: "true",
        tel: "06 681 9121",
        category: "college, education, school, university",
        address: "Via della Lungara 233",
        text: "John Cabot University",
        place_name: "John Cabot University"
      },
      center: [12.467476, 41.89253],
      geometry: {
        type: "Point",
        coordinates: [12.467476, 41.89253]
      },
      context: [
        {
          id: "postcode.15544378823638570",
          text: "00165"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.4924637713421710",
      type: "Feature",
      place_type: ["poi"],
      relevance: 0.6,
      properties: {
        landmark: true,
        wikidata: "Q469446",
        tel: "06 5833 0919",
        category: "college, education, school, university",
        address: "Via Pietro Roselli 4",
        text: "American University of Rome",
        place_name: "American University of Rome"
      },
      center: [12.4623, 41.8857],
      geometry: {
        type: "Point",
        coordinates: [12.4623, 41.8857]
      },
      context: [
        {
          id: "postcode.15815264381815910",
          text: "00153"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "address.2065545436",
      type: "Feature",
      place_type: ["address"],
      relevance: 0.9947368421052631,
      properties: {
        landmark: true,
        wikidata: "",
        tel: "",
        category: "college, education, school, university",
        address: "Clivo dei Publicii, 2",
        text: "Trinity College",
        place_name: "Trinity College"
      },
      text: "Clivo Dei Publicii",
      place_name: "Clivo Dei Publicii 2, 00153 Roma Roma, Italy",
      center: [12.482741, 41.88463],
      geometry: {
        type: "Point",
        coordinates: [12.482741, 41.88463]
      },
      address: "2",
      context: [
        {
          id: "postcode.15815264381815910",
          text: "00153"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.9363776862486700",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 580 9891",
        category: "college, education, school, university",
        address: "Via Dandolo 19",
        place_name: "Cornell University"
      },
      text: "Cornell University",
      place_name: "Cornell University, Via Dandolo 19, Roma, Roma 00153, Italy",
      matching_place_name:
        "Cornell University, Via Dandolo 19, Rome, Roma 00153, Italy",
      center: [12.46818, 41.88431],
      geometry: {
        type: "Point",
        coordinates: [12.46818, 41.88431]
      },
      context: [
        {
          id: "postcode.15815264381815910",
          text: "00153"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "address.1101303985",
      type: "Feature",
      place_type: ["address"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "",
        category: "college, education, school, university",
        address: "Via Lata, 6, 00186 Rome, Italy",
        place_name: "Penn State University"
      },
      text: "via Lata",
      place_name: "via Lata 6, 00186 Roma Roma, Italy",
      center: [12.481197, 41.89822],
      geometry: {
        type: "Point",
        coordinates: [12.481197, 41.89822]
      },
      address: "6",
      context: [
        {
          id: "postcode.15469928861926560",
          text: "00186"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.14377028647623320",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 320 2808",
        category: "college, education, school, university",
        address: "Lungotevere Arnaldo da Brescia 15",
        text: "Temple University",
        place_name: "Temple University"
      },
      center: [12.471885, 41.914324],
      geometry: {
        type: "Point",
        coordinates: [12.471885, 41.914324]
      },
      context: [
        {
          id: "postcode.14020245925380570",
          text: "00196"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.7574659668513080",
      type: "Feature",
      place_type: ["poi"],
      relevance: 0.9,
      properties: {
        landmark: true,
        tel: "06 3534 4799",
        category: "college, education, school, university",
        address: "Via Massimi 114",
        text: "Loyola University Chicago",
        place_name: "Loyola University Chicago"
      },
      matching_place_name:
        "Loyola University Chicago, Via Massimi 114, Rome, Roma 00136, Italy",
      center: [12.437873, 41.929834],
      geometry: {
        type: "Point",
        coordinates: [12.437873, 41.929834]
      },
      context: [
        {
          id: "postcode.7968738606504650",
          text: "00136"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.4915637706892710",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q6045800",
        tel: "06 9725 2724",
        category: "college, education, school, university",
        address: "Via Alessandro Algardi 19",
        text: "ICCS",
        place_name: "Intercollegiate Center for Classical Studies"
      },
      center: [12.4578, 41.8853],
      geometry: {
        type: "Point",
        coordinates: [12.4578, 41.8853]
      },
      context: [
        {
          id: "postcode.10595266237971670",
          text: "00152"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.6666666665934370",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q209344",
        tel: "06 494 0804",
        category: "college, education, landmark, school, university",
        address: "Via degli Apuli 8",
        text: "Sapienza University of Rome",
        place_name: "Sapienza University of Rome"
      },
      center: [12.515833333333, 41.903333333333],
      geometry: {
        type: "Point",
        coordinates: [12.515833333333, 41.903333333333]
      },
      context: [
        {
          id: "postcode.12698094745797020",
          text: "00185"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.1111288887618520",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q1122851",
        tel: "06 802081",
        category: "historic, historic site, landmark",
        address: "Viale Romania, 32, 00197 Roma RM, Italy",
        text: "LUISS",
        place_name: "LUISS"
      },
      center: [12.49305556, 41.92444444],
      geometry: {
        type: "Point",
        coordinates: [12.49305556, 41.92444444]
      },
      context: [
        {
          id: "postcode.7914251250142700",
          text: "00197"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.10238236398472140",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 852221",
        category: "college, education, school, university",
        address: "Viale Pola 12",
        text: "LUISS",
        place_name: "LUISS"
      },
      center: [12.51191, 41.918199],
      geometry: {
        type: "Point",
        coordinates: [12.51191, 41.918199]
      },
      context: [
        {
          id: "postcode.7401735241935250",
          text: "00198"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.666707222622610",
      type: "Feature",
      place_type: ["poi"],
      relevance: 0.6,
      properties: {
        landmark: true,
        wikidata: "Q1031803",
        tel: "06 72591",
        category: "college, education, school, university",
        address: "Via Orazio Raimondo 18",
        text: "University of Rome Tor Vergata",
        place_name: "University of Rome Tor Vergata"
      },
      matching_text: "University of Rome II",
      matching_place_name:
        "University of Rome II, Via Orazio Raimondo 18, Roma, Roma 00133, Italy",
      center: [12.603333, 41.853611],
      geometry: {
        type: "Point",
        coordinates: [12.603333, 41.853611]
      },
      context: [
        {
          id: "postcode.17684708974545090",
          text: "00133"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.15817972503138190",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 5733 2100",
        category: "college, education, school, university",
        address: "Via Ostiense 159",
        text: "Roma Tre University",
        place_name: "Roma Tre University"
      },
      center: [12.479089, 41.86252],
      geometry: {
        type: "Point",
        coordinates: [12.479089, 41.86252]
      },
      context: [
        {
          id: "postcode.7402337349488590",
          text: "00154"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "address.1905283917",
      type: "Feature",
      place_type: ["address"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q1454044",
        tel: "06 6813 4109",
        category: "college, education, school, university",
        address: "Via Pompeo Magno 22",
        text: "LUMSA",
        place_name: "LUMSA"
      },
      center: [12.467502, 41.910127],
      geometry: {
        type: "Point",
        coordinates: [12.467502, 41.910127]
      },
      address: "22",
      context: [
        {
          id: "postcode.12135619990400930",
          text: "00192"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.12578380616413600",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q1454044",
        tel: "06 6813 4109",
        category: "college, education, school, university",
        address: "Via della Traspontina 21",
        text: "LUMSA",
        place_name: "Libera Università Maria SS. Assunta"
      },
      center: [12.462891, 41.90308],
      geometry: {
        type: "Point",
        coordinates: [12.462891, 41.90308]
      },
      context: [
        {
          id: "postcode.10360309340175850",
          text: "00193"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "address.379087466",
      type: "Feature",
      place_type: ["address"],
      relevance: 0.8,
      properties: {
        landmark: true,
        wikidata: "",
        tel: "",
        category: "college, education, school, university",
        address: "Via Plinio, 44",
        text: "Marconi University",
        place_name: "Marconi University"
      },
      text: "via Plinio",
      place_name: "via Plinio 44, 00193 Roma Roma, Italy",
      center: [12.464566, 41.907202],
      geometry: {
        type: "Point",
        coordinates: [12.464566, 41.907202]
      },
      address: "44",
      context: [
        {
          id: "postcode.10360309340175850",
          text: "00193"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.18650623696553410",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        wikidata: "Q26319",
        tel: "06 7030 7312",
        category: "college, education, school, university",
        address: "Via Don Carlo Gnocchi 3",
        text: "Università degli Studi Niccolò Cusano",
        place_name: "Università degli Studi Niccolò Cusano"
      },
      text: "Università degli Studi Niccolò Cusano",
      place_name:
        "Università degli Studi Niccolò Cusano, Via Don Carlo Gnocchi 3, Roma, Roma 00166, Italy",
      center: [12.393253, 41.911848],
      geometry: {
        type: "Point",
        coordinates: [12.393253, 41.911848]
      },
      context: [
        {
          id: "postcode.10536782072474720",
          text: "00166"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.9401334337898370",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 225411",
        category: "college, education, school, university",
        address: "Via Alvaro del Portillo 21",
        text: "Università Campus Bio-Medico di Roma",
        place_name: "Università Campus Bio-Medico di Roma"
      },
      text: "Università Campus Bio-Medico di Roma",
      place_name:
        "Università Campus Bio-Medico di Roma, Via Alvaro del Portillo 21, Roma, Roma 00128, Italy",
      center: [12.47006, 41.767169],
      geometry: {
        type: "Point",
        coordinates: [12.47006, 41.767169]
      },
      context: [
        {
          id: "postcode.9622658762821580",
          text: "00128"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    },
    {
      id: "poi.11794463249554520",
      type: "Feature",
      place_type: ["poi"],
      relevance: 1,
      properties: {
        landmark: true,
        tel: "06 3250 3304",
        category: "college, education, school, university",
        address: "Piazza Lauro de Bosis 6",
        text: "I.u.s.m.",
        place_name: "Foro Italico (Roma IV)"
      },
      text: "I.u.s.m.",
      place_name: "I.u.s.m., Piazza Lauro de Bosis 6, Roma, Roma 00135, Italy",
      center: [12.458972, 41.931625],
      geometry: {
        type: "Point",
        coordinates: [12.458972, 41.931625]
      },
      context: [
        {
          id: "postcode.12800609146535220",
          text: "00135"
        },
        {
          id: "place.9045806458813870",
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "region.3733",
          short_code: null,
          wikidata: "Q220",
          text: "Roma"
        },
        {
          id: "country.333",
          short_code: "it",
          wikidata: "Q38",
          text: "Italy"
        }
      ]
    }
  ]
};

// This adds the data to the map
map.on("load", function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: "locations",
    type: "symbol",
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: "geojson",
      data: colleges
    },
    layout: {
      "icon-image": "college-15",
      "icon-allow-overlap": true
    }
  });
  // Initialize the list
  buildLocationList(colleges);
  // Create a popup, but don't add it to the map yet.
  var hoverpopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
  });

  map.on('mouseenter', 'locations', function(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.place_name;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      hoverpopup.setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
  });

  map.on('mouseleave', 'locations', function() {
      map.getCanvas().style.cursor = '';
      hoverpopup.remove();
  });
});


map.on("click", function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["locations"]
  });

  if (features.length) {
    var clickedPoint = features[0];
    // 1. Fly to the point
    flyToStore(clickedPoint);

    // 2. Close all other popups and display popup for clicked store
    createPopUp(clickedPoint);

    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName("active");
    if (activeItem[0]) {
      activeItem[0].classList.remove("active");
    }

    var selectedFeature = clickedPoint.properties.address;

    for (var i = 0; i < colleges.features.length; i++) {
      if (colleges.features[i].properties.address === selectedFeature) {
        selectedFeatureIndex = i;
      }
    }

    var listing = document.getElementById("listing-" + selectedFeatureIndex);
    listing.classList.add("active");
  }
});

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName("mapboxgl-popup");
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      "<h5>" +
        currentFeature.properties.place_name +
        "</h5>" +
        "<h6>" +
        currentFeature.properties.address +
        " &middot; " +
        currentFeature.properties.tel +
        "</h6>"
    )
    .addTo(map);
}

function buildLocationList(data) {
  for (i = 0; i < data.features.length; i++) {
    // Create an array of all the colleges and their properties
    var currentFeature = data.features[i];
    // Shorten data.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML
    var listings = document.getElementById("listings");
    // Append a div with the class 'item' for each store
    var listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "place";
    link.dataPosition = i;
    link.innerHTML = prop.place_name;

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details = listing.appendChild(document.createElement("div"));
    details.className = "address";
    details.innerHTML = prop.address;

    link.addEventListener("click", function(e) {
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];

      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing);

      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);

      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName("active");

      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      this.parentNode.classList.add("active");
    });
  }
}