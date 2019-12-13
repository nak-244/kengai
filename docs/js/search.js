$(function() {
  var href = "https://sigotora.jp/index.cfm";
  $('#srh_area_param,#sfw').on('change', function() {
    var srh_area_param = $('#srh_area_param').val();
    var sfw = $('#sfw').val();
    $('#test').prop('href', href + "?fuseaction=job.joblist&srh_area_param=5" + "&srh_area_param=" + srh_area_param + "&sfw=" + sfw);
  });
});
