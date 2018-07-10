function GetOpendata() {
    return new Promise(function(resolve, reject) {
        fetch('https://tpeoc.blob.core.windows.net/blobfs/GetAccommodatePlaceData.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                resolve(myJson);
            });
    });
}
var OpenData = GetOpendata();
OpenData.then(function(result) {
    console.log(result);
    var opendata = result;
    var opendatalen = opendata.length;
    var ListSelect = document.querySelector('.list-select');
    var selectstr = '<option value="-- 請選擇行政區 --">-- 請選擇行政區 --</option>';
    for (i = 0; i < opendatalen; i++) {
        selectstr += '<option value="' + opendata[i].District + '">' + opendata[i].District + '</option>'
    }
    ListSelect.innerHTML = selectstr;
})