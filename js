<script>
function managesections(e) {
var index=0;
    if (document.getElementsByClassName('partA1').length > 0) {index++};
    if (document.getElementsByClassName('partA2').length > 0) {index++};
    if (document.getElementsByClassName('partA3').length > 0) {index++};
      
    
    var el = document.getElementById('myfeedback');el.id='{#rqm#}';
    if (index==3) {el.innerHTML = '<span style="font-size: 1.5em; color:green;"><i class="fa fa-check"></i></span> תשובה נכונה, יפה מאוד.'}
    else if ((index>0) && (index<3))  {el.innerHTML ='<span style="font-size: 1.5em; color:orange;"><i class="fa fa-adjust"></i></span> תשובה נכונה באופן חלקי.'}
    else {el.innerHTML ='<span style="font-size: 1.5em; color:red;"><i class="fa fa-times"></i></span> תשובה שגויה.'}
 
  
}
document.addEventListener('DOMContentLoaded', managesections);

</script>
