function GetOpendata() {
    return new Promise(function(resolve, reject) {
        fetch('https://tpeoc.blob.core.windows.net/blobfs/GetDisasterSummary.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                resolve(myJson);
            });
    });
}
var OpenData = GetOpendata();
// var opendata;
OpenData.then(function(result) {
    opendata = result;

    SelectArea();
})

var ListSelect = document.querySelector('#areaId');

function SelectArea() {
    var opendatalen = opendata.length;
    let filterOpendata = [];
    var selectstr = '';
    for (i = 0; i < opendatalen; i++) {
        if (filterOpendata.indexOf(opendata[i].CaseLocationDistrict) < 0) {
            filterOpendata.push(opendata[i].CaseLocationDistrict)
            selectstr += '<option value="' + opendata[i].CaseLocationDistrict + '">' + opendata[i].CaseLocationDistrict + '</option>'
        }
    }
    ListSelect.innerHTML = '<option value disabled selected>-- 請選擇行政區 --</option>' + selectstr;
}


function ClickUpdataTabledata(e) {
    console.log(e.target.value)
}
ListSelect.addEventListener('change', ClickUpdataTabledata, false);