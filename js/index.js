
/**
 *
 * @author: Saul Neri [ N3R1XPL01T ]
 *
 */

$(document).ready(() => {
   
   function nameIsValid(name) {
	 if (!((/[A-Za-zÀ-ú]$/).test(name))) {	   
	   Swal.fire({
		 title: 'Nombre no valido',
		 text: 'El nombre no puede estar conformado solamente por numeros, y no debe contar con espacios',
		 icon: 'error',
		 confirmButtonText: 'Confirmar'
       });
	   $('#user-name').css('border-color', '#ff0020')
	  } else { return true };
   };

   function emailIsValid(email) {
	 if ((!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email))) {
	   Swal.fire({
		 title: 'Correo electronico no valido',
		 text: 'Escribe una direccion de correo electronico valida...',
		 icon: 'error',
		 confirmButtonText: 'Confirmar'
	   });
	   $('#user-email').css('border-color', '#ff0020');
	 } else { return true };
   };

  function formEvaluator(n, e, callback) {
	let unvalidInfo = 0;
	if (!(nameIsValid(n)))
	  unvalidInfo++;
	if (!(emailIsValid(e)))
	  unvalidInfo++;
	if (!(unvalidInfo >= 1))
	  callback("Validation success...");
	unvalidInfo = 0;
   };
    
   function newUserTableRow(n, e, m) {
	  $('#users-table').append(`
		 <tr>
			<td scope="row">1</th>
			<td>${n}</td>
			<td>${e}</td>
			<td>${m}</td>
			<td><button class="delete">Eliminar</button></td>
	  </tr>`);
   };

   function clearForm() {
	  $('#user-name').val('');
	  $('#user-email').val('');
	  $('#user-mony').val('');
   };
   
   function addNewUser() {
	  /**
	   * Aqui se juntan todas las funciones para formar la funcion que comprueba, evalua, anade una tabla o deniega la creacion de la tabla
	   */
	  formEvaluator($('#user-name').val(), $('#user-email').val(), msg => {
		 console.log(msg);
		 if (!($('#user-mony').val() > 10000)) {
			newUserTableRow($('#user-name').val(), $('#user-email').val(), $('#user-mony').val());
			clearForm();
		 } else {
			Swal.fire({
			   title: 'Monto invalido',
			   text: 'No se puede asignar un monto de mas de 10,000...',
			   icon: 'error',
			   confirmButtonText: 'Confirmar'
			});
			$('#user-mony').val('')
		 }
	  });
   }
   
   // Remove Row button event listenner...
   $(document).on('click', '.delete', function(e) {
	  e.preventDefault();
	  $(this).closest('tr').remove();  
   });
   
   // Add new user button event listenner...
   $('#add-new-user-button').on('click', function() {
	  addNewUser();
   });
});
