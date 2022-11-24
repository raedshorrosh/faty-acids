<script>
function managesectios(e) {
  if (
    (document.getElementsByClassName('partA1').length > 0) &
    (document.getElementsByClassName('partA2').length > 0) &
    (document.getElementsByClassName('partA3').length > 0) &
    (document.getElementsByClassName('partA4').length > 0) &
    (document.getElementsByClassName('partA5').length > 0) &
    (document.getElementsByClassName('partA6').length > 0) &
    (document.getElementsByClassName('partA7').length > 0) &
    (document.getElementsByClassName('partA8').length > 0) &
    (document.getElementsByClassName('partA9').length > 0) &
    (document.getElementsByClassName('partA10').length > 0) &
    (document.getElementsByClassName('partA11').length > 0) &
    (document.getElementsByClassName('partA12').length > 0)
  ) {
    
    el = document.getElementById('ballance');
    el.style.display = 'block';
  }
 if (
    (document.getElementsByClassName('partB1').length > 0) &
    (document.getElementsByClassName('partB2').length > 0) &
    (document.getElementsByClassName('partB3').length > 0) &
    (document.getElementsByClassName('partB4').length > 0) 
   
  ) {
    el = document.getElementById('KC');
    el.style.display = 'block';
  }
if (
    (document.getElementsByClassName('partD1').length > 0) &
    (document.getElementsByClassName('partD2').length > 0) 
   
  ) {
    el = document.getElementById('disturbance');
    el.style.display = 'block';
  }
  
  if (
    (document.getElementsByClassName('partF1').length > 0) &
    (document.getElementsByClassName('partF2').length > 0) &
    (document.getElementsByClassName('partF3').length > 0)
   
  ) {
    el = document.getElementById('final');
    el.style.display = 'block';
  }
  
}
document.addEventListener('DOMContentLoaded', managesectios);

</script>
