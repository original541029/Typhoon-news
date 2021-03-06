function getOpendata() {
    return new Promise(function(resolve, reject) {
        fetch('https://next.json-generator.com/api/json/get/Ek86hdRMr')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                resolve(myJson);
            });
    });
}
var OpenData = getOpendata();
var opendata;
OpenData.then(function(result) {
    opendata = result;
    console.log(opendata);
    selectArea();
})

var ListSelect = document.querySelector('#areaId');

function selectArea() {
    console.log(opendata);
    let filterOpendata = [];
    var selectstr = '';
    const opendatalen = opendata.length;
    for (i = 0; i < opendatalen; i++) {
        if (filterOpendata.indexOf(opendata[i].CaseLocationDistrict) < 0) {
            filterOpendata.push(opendata[i].CaseLocationDistrict)
            selectstr += '<option value="' + opendata[i].CaseLocationDistrict + '">' + opendata[i].CaseLocationDistrict + '</option>'
        }
    }
    ListSelect.innerHTML = '<option value disabled selected>-- 請選擇行政區 --</option>' + selectstr;
}


function clickUpdataTabledata(e) {
    console.log(opendata);
    console.log(e.target.value)

}
ListSelect.addEventListener('change', clickUpdataTabledata, false);


// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}