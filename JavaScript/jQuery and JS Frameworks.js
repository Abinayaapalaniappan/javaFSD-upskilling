<button id="registerBtn">Register</button>
<div id="eventCard" style="display:none; padding: 10px; border: 2px solid #4caf50; border-radius: 8px; background-color: #e8f5e9; font-weight: bold;">
   You are successfully registered! 
</div>
$('#registerBtn').click(function() {
  const btn = $(this);
  btn.prop('disabled', true).text('Registering...');

  $('#eventCard')
    .slideDown(600)
    .css({opacity: 0})
    .animate({opacity: 1}, 600)
    .delay(2500)
    .animate({opacity: 0}, 600, function() {
      $(this).slideUp(600);
      btn.prop('disabled', false).text('Register');
    });
});
